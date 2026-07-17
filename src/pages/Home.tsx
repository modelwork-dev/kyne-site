import { ArrowRight, Mail } from "lucide-react";
import Seo from "../components/Seo";
import { site } from "../content/site";

export default function Home() {
  const h = site.home;

  return (
    <div>
      <Seo title={site.defaultTitle} description={site.defaultDescription} canonicalPath="/" />

      <section className="relative isolate overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-5 py-20 before:absolute before:-left-24 before:-top-24 before:h-72 before:w-72 before:rounded-full before:bg-cyan-200/40 before:blur-3xl before:content-[''] after:absolute after:-bottom-32 after:-right-24 after:h-80 after:w-80 after:rounded-full after:bg-indigo-200/40 after:blur-3xl after:content-[''] after:motion-safe:animate-[pulse_6s_ease-in-out_infinite] md:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent-600 shadow-sm backdrop-blur motion-safe:animate-[pulse_4s_ease-in-out_infinite]">{h.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-surface-900 sm:text-5xl md:text-6xl">
            {h.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-surface-600 md:text-xl">{h.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={h.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-accent-600 hover:shadow-xl hover:shadow-blue-500/25"
            >
              {h.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={h.secondaryCta.href}
              className="inline-flex rounded-xl border border-sky-200 bg-white/80 px-5 py-3 text-sm font-semibold text-surface-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-md"
            >
              {h.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      {h.blocks.map((block) => (
        <section key={block.id} id={block.id} className="mx-auto max-w-5xl px-5 py-20">
          {"items" in block ? (
            <>
              <h2 className="text-3xl font-bold tracking-tight text-surface-900 md:text-4xl">{block.title}</h2>
              <ul className="mt-10 grid gap-5 sm:grid-cols-3">
                {block.items.map((item) => (
                  <li
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_16px_50px_-32px_rgba(37,99,235,0.45)] transition duration-300 before:absolute before:inset-x-8 before:-bottom-16 before:h-28 before:rounded-full before:bg-sky-100/70 before:blur-2xl before:content-[''] hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_24px_55px_-34px_rgba(37,99,235,0.62)]"
                  >
                    <h3 className="relative text-lg font-semibold text-surface-900 transition-colors group-hover:text-accent-600">{item.title}</h3>
                    <p className="relative mt-3 text-sm leading-6 text-surface-600">{item.body}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold tracking-tight text-surface-900 md:text-4xl">{block.title}</h2>
              {block.body.trim() ? (
                <p className="mt-3 max-w-2xl text-surface-600">{block.body}</p>
              ) : null}
              <p className="mt-4">
                <a
                  href={`mailto:${block.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 font-semibold text-accent-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {block.email}
                </a>
              </p>
            </>
          )}
        </section>
      ))}

    </div>
  );
}
