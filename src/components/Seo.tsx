import { Helmet } from "react-helmet-async";
import { site } from "../content/site";

interface SeoProps {
  title: string;
  description: string;
  /** Path sul sito, es. "/" o "/privacy-policy" (senza dominio) */
  canonicalPath: string;
}

export default function Seo({ title, description, canonicalPath }: SeoProps) {
  const canonicalUrl = `${site.origin}${canonicalPath === "/" ? "/" : canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="it_IT" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
