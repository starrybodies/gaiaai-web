import { KOGUI_PATH } from "@/content/kogui-guide";

export const dynamic = "force-static";

// Orientation for language models: what the site is and where its primary texts live
export function GET() {
  const body = `# Gaia AI

> Gaia AI is a research lab building the ecological superintelligence layer: agents that reason across Earth observation, material flows and ecological registries, with the evidence attached.

## Transmissions

- [An Urgent Message on Artificial Intelligence from the Kogui People](https://gaiaai.xyz${KOGUI_PATH}): the full, unabridged message from the Kággaba (Kogui, Kogi) Mamos and Sakas of the Sierra Nevada de Santa Marta, Colombia, to the people building AI. Plain text: https://gaiaai.xyz${KOGUI_PATH}.md

## Instruments

- [Overshoot](https://overshoot.gaiaai.xyz): a planetary atlas of material flows, with open downloads and an MCP server.

## Pages

- [Knowledge & Media](https://gaiaai.xyz/knowledge): Greenpaper, PROI, Symbiocenetic Futures, Gaian Times, Regen Digest and talks.
- [Ecosystem](https://gaiaai.xyz/ecosystem)
- [Community](https://gaiaai.xyz/community)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
