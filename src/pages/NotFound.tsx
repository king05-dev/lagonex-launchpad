import { useEffect } from "react";
import { SITE } from "@/data/site";
import { PageShell } from "@/components/common/PageShell";
import { ActionLink, Eyebrow } from "@/components/common/primitives";

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found — ${SITE.name}`;
  }, []);

  return (
    <PageShell>
      <section className="container-x flex min-h-[80vh] flex-col justify-center py-32">
        <Eyebrow>404</Eyebrow>
        <h1 className="heading mt-2 max-w-[16ch] text-[40px] sm:text-[56px]">This page doesn't exist.</h1>
        <p className="mt-4 max-w-md text-[17px] text-gray-600">The link may be out of date. The work is still here, though.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/" arrow={false}>
            Back to home
          </ActionLink>
          <ActionLink href="/#portfolio" variant="secondary" arrow={false}>
            View portfolio
          </ActionLink>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFound;
