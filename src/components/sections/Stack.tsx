import { STACK } from "@/data/site";
import { Eyebrow } from "@/components/common/primitives";
import { Reveal } from "@/components/common/motion";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-12 sm:py-16">
      <div className="container-x">
        <Reveal className="card flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-56 lg:shrink-0">
            <Eyebrow>Technology</Eyebrow>
            <h2 id="stack-title" className="heading mt-2 text-[22px] sm:text-[26px]">
              What I build with
            </h2>
          </div>
          <div className="flex-1">
            <ul className="flex flex-wrap gap-2">
              {STACK.primary.map((t, i) => (
                <li
                  key={t}
                  className={
                    i === 0
                      ? "rounded-full bg-brand px-4 py-2 text-[13px] font-bold text-white"
                      : "rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-bold text-gray-700"
                  }
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] text-gray-500">
              <span className="font-bold text-gray-700">Also:</span> {STACK.also.join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
