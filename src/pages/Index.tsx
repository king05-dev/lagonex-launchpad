import { useEffect } from "react";
import { SITE } from "@/data/site";
import { PageShell } from "@/components/common/PageShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    document.title = SITE.title;
  }, []);

  return (
    <PageShell>
      <Hero />
      <About />
      <Experience />
      <PersonalProjects />
      <Portfolio />
      <Stack />
      <Contact />
    </PageShell>
  );
};

export default Index;
