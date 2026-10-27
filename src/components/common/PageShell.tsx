import type { ReactNode } from "react";
import { SiteNav } from "@/components/navigation/SiteNav";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { MessengerChat } from "@/components/contact/MessengerChat";
import { LightboxProvider } from "@/components/common/Lightbox";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LightboxProvider>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      <MessengerChat />
    </LightboxProvider>
  );
}
