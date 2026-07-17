import { Link } from "react-router-dom";
import { site, siteYear } from "../content/site";

export default function Footer() {
  const note = site.footer.note.replace("{year}", siteYear());
  const { productAttribution, legalLine } = site.footer;

  return (
    <footer className="border-t border-sky-100 bg-gradient-to-b from-surface-50 to-blue-50/60">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-5 py-8 text-sm text-surface-600 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p>{note}</p>
          <p>
            {productAttribution.beforeLink}
            <a
              href={productAttribution.companyUrl}
              className="font-medium text-accent-600 hover:text-accent-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {productAttribution.companyLabel}
            </a>
            .
          </p>
          <p>{legalLine}</p>
        </div>
        <ul className="flex shrink-0 flex-wrap gap-4">
          {site.footer.links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="font-medium text-accent-600 hover:text-accent-500">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
