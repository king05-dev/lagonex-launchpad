/*
  Server entry used only at export time (scripts/export-kapaldo.mjs) to pre-render
  each page to static HTML. Crawlers that don't run JavaScript (Bing, ChatGPT
  search, link previews) then see the full page text instead of an empty #root.
  The browser still boots normally from main.tsx and replaces this markup.
*/
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

/** `route` is app-relative ("/", "/work/kapaldo"); the deploy base is added here. */
export function render(route: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return renderToString(
    <StaticRouter location={base + route} basename={base}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StaticRouter>,
  );
}
