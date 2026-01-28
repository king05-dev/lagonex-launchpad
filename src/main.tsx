import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (typeof window !== "undefined") {
  const { origin, pathname, search, hash, href } = window.location;
  const decodedPathname = (() => {
    try {
      return decodeURIComponent(pathname);
    } catch {
      return pathname;
    }
  })();

  const isRootLikePath = decodedPathname.replace(/[\s\u00A0]+/g, "") === "/";
  if ((isRootLikePath && href.endsWith("/")) || decodedPathname !== "/") {
    if (isRootLikePath) {
      window.history.replaceState(null, "", `${origin}${search}${hash}`);
    }
  }
}

createRoot(document.getElementById("root")!).render(<App />);
