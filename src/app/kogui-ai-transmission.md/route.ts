import { KOGUI_SOURCE_URL, KOGUI_TRANSMISSION } from "@/content/kogui-transmission";
import { KOGUI_FAQ, KOGUI_GLOSSARY, KOGUI_PATH, KOGUI_SUMMARY } from "@/content/kogui-guide";

export const dynamic = "force-static";

// Plain-text edition of the transmission for researchers, feed readers and AI systems
export function GET() {
  const { title, attribution, parts, signatures } = KOGUI_TRANSMISSION;
  const md = [
    `# ${title}`,
    `> ${attribution}`,
    `Source: [Earth Care Network, “Passing along an urgent message.”](${KOGUI_SOURCE_URL}), 1 October 2026.`,
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
