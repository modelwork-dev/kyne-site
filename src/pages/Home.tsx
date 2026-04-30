import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Seo from "../components/Seo";
import { site } from "../content/site";

export default function Home() {
  const h = site.home;

  return (
    <div>
      <Seo title={site.defaultTitle} description={site.defaultDescription} canonicalPath="/" />

      <section className="border-b border-surface-200 bg-surface-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">{h.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-surface-900 md:text-4xl">
            {h.headline}
          </h1>
          <p className="mt-4 text-lg text-surface-600 md:text-xl">{h.subhead}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={h.primaryCta.href}
              className="inline-flex rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-600"
            >
              {h.primaryCta.label}
            </a>
            <a
              href={h.secondaryCta.href}
              className="inline-flex rounded-lg border border-surface-200 bg-white px-5 py-2.5 text-sm font-semibold text-surface-800 hover:bg-surface-50"
            >
              {h.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      {h.blocks.map((block) => (
        <section key={block.id} id={block.id} className="mx-auto max-w-4xl px-5 py-14">
          {"items" in block ? (
            <>
              <h2 className="text-2xl font-bold text-surface-900">{block.title}</h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {block.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-surface-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-surface-600">{item.body}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-surface-900">{block.title}</h2>
              <p className="mt-3 max-w-2xl text-surface-600">{block.body}</p>
              <p className="mt-4">
                <a
                  href={`mailto:${block.email}`}
                  className="inline-flex items-center gap-2 font-semibold text-accent-600 hover:text-accent-500"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {block.email}
                </a>
              </p>
            </>
          )}
        </section>
      ))}

      <section className="border-t border-surface-200 bg-surface-50 px-5 py-10 text-center text-sm text-surface-600">
        <Link to="/privacy-policy" className="font-medium text-accent-600 hover:text-accent-500">
          Privacy Policy
        </Link>
      </section>
    </div>
  );
}
