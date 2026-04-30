import Seo from "../components/Seo";
import { site } from "../content/site";

export default function PrivacyPolicy() {
  const p = site.privacy;

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <Seo title={p.pageTitle} description={p.description} canonicalPath="/privacy-policy" />
      <h1 className="text-3xl font-extrabold tracking-tight text-surface-900 md:text-4xl">{p.title}</h1>
      <p className="mt-2 text-surface-600">{p.description}</p>

      <div className="mt-10 max-w-none space-y-8 text-surface-700">
        {p.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-surface-900">{section.heading}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} className="mt-3 text-surface-700">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
