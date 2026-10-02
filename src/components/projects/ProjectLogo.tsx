import type { Project } from "@/data/projects";
import { KapaldoLogo } from "@/components/common/primitives";

/** The project's real logo, on a white chip so it reads on any stage. */
export function ProjectLogo({ project, className = "" }: { project: Project; className?: string }) {
  const { logo } = project.brand;
  return (
    <span className={`inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm ${className}`}>
      {logo.kapaldo ? (
        <>
          <KapaldoLogo className="h-7 w-7" />
          <span className="text-base font-extrabold text-gray-900">Kapaldo</span>
        </>
      ) : (
        <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-7 w-auto" />
      )}
    </span>
  );
}
