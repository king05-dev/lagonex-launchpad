import { SwissNavbar } from "@/components/swiss/SwissNavbar";
import { SwissHero } from "@/components/swiss/SwissHero";
import { SwissTools } from "@/components/swiss/SwissTools";
import { SwissExperience } from "@/components/swiss/SwissExperience";
import { SwissProjects } from "@/components/swiss/SwissProjects";
import { SwissProcess } from "@/components/swiss/SwissProcess";
import { SwissPersonal } from "@/components/swiss/SwissPersonal";
import { SwissSkills } from "@/components/swiss/SwissSkills";
import { SwissContact } from "@/components/swiss/SwissContact";
import { SwissMessengerChat } from "@/components/swiss/SwissMessengerChat";

const Index = () => {
  return (
    <div
      style={{
        backgroundColor: "#fafaf7",
        color: "#0e0e0e",
        fontFamily: '"Inter", system-ui, sans-serif',
        minHeight: "100vh",
      }}
    >
      <SwissNavbar />
      <main>
        <SwissHero />
        <SwissTools />
        <SwissExperience />
        <SwissProjects />
        <SwissProcess />
        <SwissPersonal />
        <SwissSkills />
        <SwissContact />
      </main>
      <SwissMessengerChat />
    </div>
  );
};

export default Index;
