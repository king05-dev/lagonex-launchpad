/*
  Builds the portfolio for kapaldo.com/developer and copies it into the Kapaldo
  site's public folder, where Cloudflare serves it as static files.

    npm run export:kapaldo                     # -> ../../../ayts/ayts-fe/public/developer
    npm run export:kapaldo -- <target-dir>

  Each case study gets its own index.html (with its own title and preview tags),
  so deep links like /developer/work/kapaldo load without any server rewrite.

  Every page is also pre-rendered (src/entry-server.tsx) so its full text is in
  the HTML. Crawlers that don't run JavaScript (Bing, ChatGPT search, link
  previews) would otherwise only see an empty <div id="root">.
*/
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist-kapaldo");
const target = resolve(root, process.argv[2] ?? "../../../ayts/ayts-fe/public/developer");
const siteUrl = "https://kapaldo.com/developer/";

execSync("npx vite build --mode kapaldo --outDir dist-kapaldo --emptyOutDir", { cwd: root, stdio: "inherit" });
const ssrOut = join(root, "dist-kapaldo-ssr");
execSync("npx vite build --mode kapaldo --ssr src/entry-server.tsx --outDir dist-kapaldo-ssr --emptyOutDir", { cwd: root, stdio: "inherit" });
const { render, PROJECTS } = await import(pathToFileURL(join(ssrOut, "entry-server.js")).href);

// Root-level files that belong to the standalone site, plus unused legacy assets.
for (const f of ["_redirects", "robots.txt", "hero-images", "placeholder.svg"]) rmSync(join(out, f), { recursive: true, force: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const shell = readFileSync(join(out, "index.html"), "utf8");

/*
  framer-motion renders each element's start state (opacity:0, shifted down)
  into the HTML. The browser re-renders and animates anyway, so the static copy
  starts visible: crawlers and no-JS readers shouldn't get hidden text. Those
  elements are tagged so a browser that does run JS still hides them until the
  app mounts and fades them in (no flash of text that then blinks out).
*/
const FADE_GUARD = '<script>document.documentElement.classList.add("js")</script><style>.js [data-ssr-fade]{opacity:0}</style>';
function visible(html) {
  return html.replace(/ style="([^"]*)"/g, (_, css) => {
    const kept = css
      .split(";")
      .filter((d) => d && !/^opacity:0$/.test(d.trim()) && !/^transform:translate[XYZ3d]*\(/.test(d.trim()) && !/^transform:none$/.test(d.trim()))
      .join(";");
    const tag = css.split(";").some((d) => d.trim() === "opacity:0") ? " data-ssr-fade" : "";
    return (kept ? ` style="${kept}"` : "") + tag;
  });
}

const PERSON = { "@id": `${siteUrl}#person` };
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c")}</script>`;

function page({ title, description, url, route, ld }) {
  const html = visible(render(route));
  if (!html.includes("<h1") && !html.includes("<h2")) throw new Error(`Pre-render of ${route} produced no headings`);
  return shell
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${esc(description)}`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${esc(title)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace("</head>", () => `    ${FADE_GUARD}
    ${jsonLd(ld)}
  </head>`);
}

// Project slugs and copy come straight from the data file (via the SSR bundle).
const projects = PROJECTS;
if (projects.length === 0) throw new Error("No projects in src/data/projects.ts");
const workUrl = (p) => `${siteUrl}work/${p.slug}/`;

for (const p of projects) {
  const dir = join(out, "work", p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "index.html"),
    page({
      title: `${p.name} — ${p.category} | Jerquin Bayudo`,
      description: `${p.name}: ${p.summary}`,
      url: workUrl(p),
      route: `/work/${p.slug}`,
      // The case study page, and the product it describes (built by the Person in the shell).
      ld: {
        "@graph": [
          { "@type": "WebPage", "@id": workUrl(p), url: workUrl(p), name: `${p.name} — ${p.category}`, description: p.summary, about: { "@id": `${workUrl(p)}#product` }, author: PERSON, isPartOf: { "@id": siteUrl } },
          {
            "@type": "WebApplication",
            "@id": `${workUrl(p)}#product`,
            name: p.name,
            description: p.summary,
            applicationCategory: p.category,
            operatingSystem: "Web",
            ...(p.links[0] && { url: p.links[0].href }),
            ...(p.stack.length > 0 && { keywords: p.stack.join(", ") }),
            creator: PERSON,
          },
        ],
      },
    }),
  );
}

// Home page: same tags as the shell, plus its pre-rendered content.
const homeLd = {
  "@type": "ProfilePage",
  "@id": siteUrl,
  url: siteUrl,
  mainEntity: PERSON,
  hasPart: projects.map((p) => ({ "@type": "WebPage", "@id": workUrl(p), url: workUrl(p), name: p.name })),
};
writeFileSync(
  join(out, "index.html"),
  shell.replace('<div id="root"></div>', () => `<div id="root">${visible(render("/"))}</div>`).replace("</head>", () => `    ${FADE_GUARD}
    ${jsonLd(homeLd)}
  </head>`),
);
// kapaldo.com's sitemap (ayts app/sitemap.ts) imports this, so new projects get listed automatically.
writeFileSync(join(out, "pages.json"), JSON.stringify({ work: projects.map((p) => p.slug) }, null, 2) + "\n");
rmSync(ssrOut, { recursive: true, force: true });

if (!existsSync(dirname(target))) throw new Error(`Target parent not found: ${dirname(target)}`);
rmSync(target, { recursive: true, force: true });
cpSync(out, target, { recursive: true });
console.log(`\nExported ${projects.length} case studies + home to ${target}`);
