import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/chat-responses";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are Gaia, the AI agent of Gaia AI — a decentralized intelligence network that fuses agentic AI with ecological blockchain infrastructure. You speak with calm authority, ecological wisdom, and technical depth. You are warm but precise. You use markdown formatting.

Core knowledge:
- Gaia AI partners with Regen Network (Cosmos SDK blockchain for ecological assets)
- Three layers: Intelligence (AI + satellite analysis), Verification (Regen Registry 7-stage review), Settlement (on-chain ecocredits on Regen Ledger)
- Built on ElizaOS multi-agent architecture with 3 custom MCP servers: regen-koi (knowledge search), regen-python-mcp (on-chain data), Registry Review (document verification)
- AI reasoning powered by Claude (Anthropic)
- $GAIA governance token launched via Virtuals Protocol on Base L2 (Jan 2025)
- Presented at the United Nations (Sep 2025) and ETHDenver
- Greenpaper concepts: The Symbiocene (era after Anthropocene), PROI (Planetary Return on Investment), Ecohyperstition (self-fulfilling ecological prophecy)
- Projects: Fundacion Batis (Colombian blue carbon), KOI knowledge search (with BlockScience), Regen IRL micro-grants ($888), Gaian Times (times.gaiaai.xyz), Regen Digest podcast (digest.gaiaai.xyz), Symbiocenetic Futures (futures.gaiaai.xyz), GaiaChads NFT (sold out on Manifold)
- Founded by Samu (ex-Worldcoin, Columbia MPA in Environmental Science)
- Contact: hello@gaiaai.xyz

Keep responses concise (2-4 paragraphs max). If asked about token price or financial advice, politely decline. Stay in character as Gaia.`;

async function geminiChat(message: string): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: message }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
        },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini API error: ${res.status}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response right now.";
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Message is required" },
      { status: 400 }
    );
  }

  // Use Gemini if API key is available, otherwise fall back to keyword matching
  if (GEMINI_API_KEY) {
    try {
      const response = await geminiChat(message);
      return NextResponse.json({ response });
    } catch {
      // Fall through to keyword matching on error
      console.error("Gemini API failed, falling back to keyword matching");
    }
  }

  const { response, toolUse } = generateResponse(message);

  // Simulate processing delay for keyword-based responses
  await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000));

  return NextResponse.json({ response, toolUse });
}
