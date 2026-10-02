import type { ReactNode } from "react";
import { SiteNav } from "@/components/navigation/SiteNav";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { MessengerChat } from "@/components/contact/MessengerChat";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      <MessengerChat />
    </>
  );
}
