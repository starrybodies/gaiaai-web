import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, transmissionArticleSchema } from "@/lib/structured-data";
import {
  KOGUI_RESPONSE_URL,
  KOGUI_SOURCE_PDF_EN,
  KOGUI_SOURCE_PDF_ES,
  KOGUI_SOURCE_PUBLISHED,
  KOGUI_SOURCE_URL,
  KOGUI_TRANSMISSION,
  KOGUI_VIA_URL,
  KOGUI_WORD_COUNT,
} from "@/content/kogui-transmission";
import {
  KOGUI_FAQ,
  KOGUI_GLOSSARY,
  KOGUI_KEY_POINTS,
  KOGUI_PATH,
  KOGUI_SUMMARY,
} from "@/content/kogui-guide";

const { title, attribution, parts, signatures } = KOGUI_TRANSMISSION;
const SLIDE_COUNT = parts.length + 1;
const PUBLISHED = "2026-10-10";
const MODIFIED = "2026-10-20";
const OG_IMAGE = "/transmissions/kogui/og.jpg";
const slideSrc = (n: number) => `/transmissions/kogui/slide-${String(n).padStart(2, "0")}.webp`;

const DESCRIPTION =
  "Read the full Kogui transmission on AI: the unabridged message from the Kággaba (Kogi) Mamos and Sakas of the Sierra Nevada de Santa Marta to the people building artificial intelligence.";

export const metadata: Metadata = {
  title: "Kogui AI Transmission: An Urgent Message on Artificial Intelligence",
  description: DESCRIPTION,
  keywords: [
    "Kogui AI transmission",
    "Kogui message on artificial intelligence",
    "Kogi AI message",
    "Kogi elder brothers",
    "Kággaba",
    "Mamo Vangelio Moscote Alberto",
    "Saka Rosa Mamatacán Sauna",
    "Sierra Nevada de Santa Marta",
    "Aluna",
    "Indigenous perspectives on AI",
    "AI ethics",
  ],
  authors: [{ name: "Mamo Vangelio Moscote Alberto" }, { name: "Saka Rosa Mamatacán Sauna" }],
  alternates: {
    canonical: KOGUI_PATH,
    types: { "text/markdown": `${KOGUI_PATH}.md` },
  },
  openGraph: {
    type: "article",
    title: "An Urgent Message on Artificial Intelligence from the Kogui People",
    description: DESCRIPTION,
    url: `https://gaiaai.xyz${KOGUI_PATH}`,
    publishedTime: PUBLISHED,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "An urgent message on artificial intelligence from the Kogui people",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "An Urgent Message on Artificial Intelligence from the Kogui People",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/** Marks the part's quoted sentence inside the paragraph that contains it. */
function Paragraph({ text, quote }: { text: string; quote: string }) {
  const i = text.indexOf(quote);
  if (i < 0) return <p>{text}</p>;
  return (
    <p>
      {text.slice(0, i)}
      <mark className="bg-transparent font-semibold text-foreground shadow-[inset_0_-0.35em_0_var(--color-green-dim)]">
        {quote}
      </mark>
      {text.slice(i + quote.length)}
    </p>
  );
}

export default function KoguiTransmissionPage() {
  return (
    <main>
      <JsonLd
        data={transmissionArticleSchema({
          headline: title,
          alternativeHeadline: "The Kogui AI transmission",
          description: DESCRIPTION,
          url: KOGUI_PATH,
          image: [OG_IMAGE, slideSrc(1)],
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          wordCount: KOGUI_WORD_COUNT,
          keywords: ["Kogui", "Kogi", "Kággaba", "artificial intelligence", "Aluna", "Sierra Nevada de Santa Marta"],
          authors: ["Mamo Vangelio Moscote Alberto", "Saka Rosa Mamatacán Sauna"],
          authorAffiliation: "Kággaba (Kogui) people, Ezuama Mayor Kuamaka",
          translators: ["José Manuel Mamatacán", "Christian Horstmann"],
          source: {
            name: "Un mensaje desde el corazón del mundo sobre la inteligencia artificial",
            url: KOGUI_SOURCE_URL,
            publisher: "Movilizatorio",
            datePublished: KOGUI_SOURCE_PUBLISHED,
            inLanguage: ["en", "es"],
          },
          about: [
            { name: "Kogi people", sameAs: "https://en.wikipedia.org/wiki/Kogi_people" },
            { name: "Artificial intelligence", sameAs: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
            { name: "Sierra Nevada de Santa Marta", sameAs: "https://en.wikipedia.org/wiki/Sierra_Nevada_de_Santa_Marta" },
          ],
          sections: parts.map((part) => part.quote),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Knowledge & Media", url: "/knowledge" },
          { name: "Kogui AI Transmission", url: KOGUI_PATH },
        ])}
      />
      <JsonLd data={faqSchema(KOGUI_FAQ)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,var(--color-green-dim),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-[13px] text-green">
              <span aria-hidden className="h-1.5 w-1.5 bg-green" />
              Transmission · Kággaba / Kogui
            </p>
            <h1 className="text-[clamp(2.1rem,5vw,3.9rem)] font-bold leading-[1.04] tracking-[-0.01em]">
              An urgent message on <span className="text-gradient">artificial intelligence</span> from the Kogui people
            </h1>
            <p className="mt-8 max-w-2xl border-l-2 border-green pl-5 text-[17px] leading-[1.7] text-foreground/90">
              {attribution}
            </p>
            <p className="mt-6 font-mono text-[13px] text-muted">
              Full text, unabridged · {KOGUI_WORD_COUNT.toLocaleString("en-US")} words · Published by Movilizatorio
              on{" "}
              <time dateTime={KOGUI_SOURCE_PUBLISHED} className="whitespace-nowrap">30 September 2026</time>
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#transmission" variant="primary">Read the transmission</Button>
              <Button href="#slides">View the {SLIDE_COUNT} slides</Button>
              <Button href={KOGUI_SOURCE_URL} variant="text" external>Original publication</Button>
            </div>
          </div>
          <a href="#slides" className="panel panel-ticks group mx-auto block w-full max-w-[380px] overflow-hidden">
            <Image
              src={slideSrc(1)}
              alt="Cover slide: An urgent message on artificial intelligence from the Kogui people"
              width={1080}
              height={1350}
              priority
              sizes="(max-width: 1024px) 80vw, 380px"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>
        </div>
      </section>

      {/* In brief */}
      <Section id="in-brief">
        <SectionHeading label="In brief" title="What the Kogui are saying" intro={<p>{KOGUI_SUMMARY}</p>} />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {KOGUI_KEY_POINTS.map((item, i) => (
            <li key={item.quote} className="bg-background p-6">
              <span className="font-mono text-[13px] text-green">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[15px] font-semibold leading-snug">{item.point}</p>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-muted">“{item.quote}”</blockquote>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[12px] text-muted">Summary by Gaia AI. Quoted lines are the transmission&apos;s own words.</p>
      </Section>

      {/* Carousel */}
      <Section id="slides">
        <SectionHeading
          label="Carousel"
          title={`The transmission in ${SLIDE_COUNT} slides`}
          intro={
            <p>
              Gaia AI set the whole message into a carousel for sharing. Every slide carries the text in order, with one
              of its lines raised as a headline. Scroll sideways to read, or save a slide to share it.
            </p>
          }
        />
        <ul className="mt-12 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6" aria-label="Carousel slides">
          {Array.from({ length: SLIDE_COUNT }, (_, k) => {
            const n = k + 1;
            const part = parts[k - 1];
            const alt = part
              ? `Slide ${n} of ${SLIDE_COUNT}: “${part.quote}”`
              : "Cover slide: An urgent message on artificial intelligence from the Kogui people";
            return (
              <li key={n} className="w-[min(78vw,340px)] shrink-0 snap-start">
                <a href={part ? `#${part.id}` : "#transmission"} className="panel block overflow-hidden">
                  <Image src={slideSrc(n)} alt={alt} width={1080} height={1350} sizes="340px" className="h-auto w-full" />
                </a>
                <div className="mt-3 flex items-center justify-between font-mono text-[12px] text-muted">
                  <span>{String(n).padStart(2, "0")} / {SLIDE_COUNT}</span>
                  <a href={slideSrc(n)} download className="text-green hover:underline">Save image</a>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Full text. No overflow clipping here, so the contents list can stay pinned. */}
      <section id="transmission" className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[260px_1fr]">
          <nav aria-label="Parts of the transmission" className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-5 flex items-center gap-3 font-mono text-[13px] text-green">
              <span aria-hidden className="h-1.5 w-1.5 bg-green" />
              The full transmission
            </p>
            <details className="rounded-[4px] border border-border p-4 lg:hidden">
              <summary className="cursor-pointer font-mono text-[13px] text-muted">Jump to a part</summary>
              <PartsList />
            </details>
            <div className="hidden lg:block"><PartsList /></div>
          </nav>

          <article className="max-w-[68ch]" lang="en">
            <header>
              <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.1]">{title}</h2>
              <p className="mt-6 text-[15px] italic leading-relaxed text-muted">{attribution}</p>
            </header>

            {parts.map((part, i) => (
              <section key={part.id} id={part.id} aria-labelledby={`${part.id}-h`} className="mt-14">
                <h3 id={`${part.id}-h`} className="mb-6 flex gap-4 border-t border-border pt-5 text-[13px] leading-snug text-green">
                  <span aria-hidden className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>{part.quote}</span>
                </h3>
                <div className="space-y-4 text-[18px] leading-[1.75] text-foreground/90">
                  {part.paragraphs.map((text, j) => (
                    <Paragraph key={j} text={text} quote={part.quote} />
                  ))}
                </div>
              </section>
            ))}

            <footer className="mt-14 border-t border-border pt-6 font-mono text-[14px] leading-[1.8]">
              {signatures.map((line, i) => (
                <p key={line} className={i < 2 ? "text-foreground" : "text-muted"}>{line}</p>
              ))}
            </footer>
          </article>
        </div>
      </section>

      {/* Glossary */}
      <Section id="glossary">
        <SectionHeading
          label="Glossary"
          title="Kogui terms in the transmission"
          intro={<p>Each term is defined in the message&apos;s own words wherever it defines them.</p>}
        />
        <dl className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {KOGUI_GLOSSARY.map((entry) => (
            <div key={entry.term} className="bg-background p-6">
              <dt className="font-mono text-[15px] font-semibold text-green">{entry.term}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-muted">{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading label="Questions" title="About the Kogui transmission" />
        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {KOGUI_FAQ.map((entry) => (
            <div key={entry.question}>
              <h3 className="text-[15px] font-bold leading-snug">{entry.question}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-muted">{entry.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Source */}
      <Section id="source">
        <div className="panel panel-ticks grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div className="max-w-2xl space-y-4 text-[16px] leading-[1.7] text-muted">
            <p className="flex items-center gap-3 font-mono text-[13px] text-green">
              <span aria-hidden className="h-1.5 w-1.5 bg-green" />
              Source
            </p>
            <p className="text-foreground">
              Gaia AI shares this transmission in full and in its exact words so that it can reach the people it
              addresses. The words belong to the Kággaba people.
            </p>
            <p>
              The message comes from the Kággaba authorities Mamo Vangelio Moscote Alberto and Saka Rosa Mamatacán
              Sauna. José Manuel Mamatacán translated it into Spanish and Christian Horstmann into English. Movilizatorio
              published it on 30 September 2026 in{" "}
              <a href={KOGUI_SOURCE_PDF_EN} className="text-green hover:underline">English</a> and{" "}
              <a href={KOGUI_SOURCE_PDF_ES} className="text-green hover:underline">Spanish</a>. Gaia AI received it via{" "}
              <a href={KOGUI_VIA_URL} className="text-green hover:underline">Earth Care Network</a>, which reposted it on
              1 October.
            </p>
            <p>
              Hereditary Chief Phil Lane Jr. and the Four Worlds International Institute published a response,{" "}
              <a href={KOGUI_RESPONSE_URL} className="text-green hover:underline">
                “To our Honored and Respected Relatives, the Kággaba People of the Sierra Nevada de Gonawindua”
              </a>
              .
            </p>
            <p>
              A plain-text version is available for researchers and AI systems at{" "}
              <a href={`${KOGUI_PATH}.md`} className="font-mono text-[14px] text-green hover:underline">
                {KOGUI_PATH}.md
              </a>
              .
            </p>
          </div>
          <Button href={KOGUI_SOURCE_URL} external>Read on Movilizatorio</Button>
        </div>
      </Section>
    </main>
  );
}

function PartsList() {
  return (
    <ol className="mt-4 space-y-2.5 lg:mt-0">
      {parts.map((part, i) => (
        <li key={part.id} className="flex gap-3 text-[13px] leading-snug">
          <span className="font-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
          <a href={`#${part.id}`} className="text-muted transition-colors hover:text-green">
            {part.quote}
          </a>
        </li>
      ))}
    </ol>
  );
}
