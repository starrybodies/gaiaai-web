import {
  KOGUI_SOURCE_PDF_EN,
  KOGUI_SOURCE_PDF_ES,
  KOGUI_SOURCE_URL,
  KOGUI_TRANSMISSION,
  KOGUI_VIA_URL,
} from "@/content/kogui-transmission";
import { KOGUI_FAQ, KOGUI_GLOSSARY, KOGUI_PATH, KOGUI_SUMMARY } from "@/content/kogui-guide";

export const dynamic = "force-static";

// Plain-text edition of the transmission for researchers, feed readers and AI systems
export function GET() {
  const { title, attribution, parts, signatures } = KOGUI_TRANSMISSION;
  const md = [
    `# ${title}`,
    `> ${attribution}`,
    `Source: [Movilizatorio, “Un mensaje desde el corazón del mundo sobre la inteligencia artificial”](${KOGUI_SOURCE_URL}), 30 September 2026 ([English PDF](${KOGUI_SOURCE_PDF_EN}), [Spanish PDF](${KOGUI_SOURCE_PDF_ES})). Spanish translation by José Manuel Mamatacán; English translation by Christian Horstmann. Received via [Earth Care Network](${KOGUI_VIA_URL}), 1 October 2026.`,
    `Web edition: https://gaiaai.xyz${KOGUI_PATH}`,
    `## Summary (by Gaia AI)`,
    KOGUI_SUMMARY,
    `## The full transmission`,
    ...parts.map((part) => part.paragraphs.join("\n\n")),
    signatures.join("  \n"),
    `## Glossary`,
    ...KOGUI_GLOSSARY.map((entry) => `**${entry.term}**: ${entry.definition}`),
    `## Questions`,
    ...KOGUI_FAQ.map((entry) => `### ${entry.question}\n\n${entry.answer}`),
  ].join("\n\n");

  return new Response(`${md}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
