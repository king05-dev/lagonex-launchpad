import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const CaseStudy = lazy(() => import("./pages/CaseStudy"));

/** Scrolls to the hash target after navigation, or to the top on a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let frame = 0;
    // The target may not exist yet (lazy routes, first paint) — retry briefly.
    const seek = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else if (tries++ < 30) frame = requestAnimationFrame(seek);
    };
    seek();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
    <ScrollManager />
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
