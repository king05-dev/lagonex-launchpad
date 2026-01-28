import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (typeof window !== "undefined") {
  const { origin, pathname, search, hash, href } = window.location;
  if (pathname === "/" && href.endsWith("/")) {
    window.history.replaceState(null, "", `${origin}${search}${hash}`);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
