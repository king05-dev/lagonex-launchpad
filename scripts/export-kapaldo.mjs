/*
  Builds the portfolio for kapaldo.com/developer and copies it into the Kapaldo
  site's public folder, where Cloudflare serves it as static files.

    npm run export:kapaldo                     # -> ../../../ayts/ayts-fe/public/developer
    npm run export:kapaldo -- <target-dir>

  Each case study gets its own index.html (with its own title and preview tags),
  so deep links like /developer/work/kapaldo load without any server rewrite.
*/
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist-kapaldo");
const target = resolve(root, process.argv[2] ?? "../../../ayts/ayts-fe/public/developer");
const siteUrl = "https://kapaldo.com/developer/";

execSync("npx vite build --mode kapaldo --outDir dist-kapaldo --emptyOutDir", { cwd: root, stdio: "inherit" });

// Root-level files that belong to the standalone site, plus unused legacy assets.
for (const f of ["_redirects", "robots.txt", "hero-images", "placeholder.svg"]) rmSync(join(out, f), { recursive: true, force: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const shell = readFileSync(join(out, "index.html"), "utf8");

function page({ title, description, url }) {
  return shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${esc(description)}`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${esc(title)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
}

// Project slugs and copy come straight from the data file.
const src = readFileSync(join(root, "src/data/projects.ts"), "utf8");
const projects = [...src.matchAll(/slug: "([^"]+)",[\s\S]*?name: "([^"]+)",\s*category: "([^"]+)",[\s\S]*?summary: "([^"]+)",/g)].map(
  ([, slug, name, category, summary]) => ({ slug, name, category, summary }),
);
if (projects.length === 0) throw new Error("No projects parsed from src/data/projects.ts");

for (const p of projects) {
  const dir = join(out, "work", p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "index.html"),
    page({ title: `${p.name} — ${p.category} | Jerquin Bayudo`, description: `${p.name}: ${p.summary}`, url: `${siteUrl}work/${p.slug}/` }),
  );
}

if (!existsSync(dirname(target))) throw new Error(`Target parent not found: ${dirname(target)}`);
rmSync(target, { recursive: true, force: true });
cpSync(out, target, { recursive: true });
console.log(`\nExported ${projects.length} case studies + home to ${target}`);
