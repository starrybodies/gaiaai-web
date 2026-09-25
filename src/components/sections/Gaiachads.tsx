import Image from "next/image";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

const CHADS = [
  {
    name: "Into the Symbiocene",
    number: "#009",
    archetype: "Union of intelligences",
    image: "https://assets.manifold.xyz/optimized/67d579a5c6370d3b6df0d20dada55763b2737d3b862fd8ce0dac2d53f1ec5778/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad009",
  },
  {
    name: "The Mycological Mediator",
    number: "#008",
    archetype: "Fungal restoration",
    image: "https://assets.manifold.xyz/optimized/6c6b9d5ce3cdc1181c4fa2ae2667250c99c1869977734c57fac5cfb4e271046d/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad008",
  },
  {
    name: "The Biochar Biologist",
    number: "#007",
    archetype: "Soil regeneration",
    image: "https://assets.manifold.xyz/optimized/74da028fc1942e853b24bd133d55f416bc4b8f15f7f17b5cf14dce1d4db557e6/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad007",
  },
  {
    name: "The Climate Engineer",
    number: "#006",
    archetype: "Renewable optimization",
    image: "https://assets.manifold.xyz/optimized/3751ca85fb69f559bf4a950b817da1a2ef82725bbdf46c77bf4f1231919f1600/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad006",
  },
  {
    name: "The Hive Queen",
    number: "#005",
    archetype: "Pollinator protection",
    image: "https://assets.manifold.xyz/optimized/cf9702354b1edb01b13feade649c55bd33848b83971d8c70da0244ada318f441/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad005",
  },
  {
    name: "The Vulcanologist",
    number: "#004",
    archetype: "Geothermal energy",
    image: "https://assets.manifold.xyz/optimized/bb0ec8db92c82cf07e026d7e8c9e4789197e5cfab7c94c5f621a4ebe565ea0c0/w_640.webp",
    link: "https://manifold.gallery/gaiaai/gaiachad004",
  },
  {
    name: "The Polar Protector",
    number: "#003",
    archetype: "Arctic preservation",
    image: "https://assets.manifold.xyz/optimized/a071d2803640be43ed0c29ed6056305773f9904bd4e244351007d87dc2cc36f5/w_640.jpg",
    link: "https://manifold.gallery/gaiaai/gaiachad003",
  },
  {
    name: "The Forest Warden",
    number: "#002",
    archetype: "Boreal reforestation",
    image: "https://assets.manifold.xyz/optimized/eea236cc86fe339a1ab5e7f3be3b9294dcef77e37e9fac93640c9e9f9d6b6b41/w_640.webp",
    link: "https://manifold.gallery/gaiaai/GAIACHAD002",
  },
];

export function Gaiachads() {
  return (
    <Section id="gaiachads">
      <SectionHeading
        label="GaiaChads Collection"
        title="Regenerative archetypes, sold out"
        intro={
          <p>
            A limited-edition PFP collection of regenerative AI agents — each
            representing a dimension of planetary healing. The series sold out
            on Manifold. Holders gain early access, alpha, and governance roles
            in the Gaia ecosystem.
          </p>
        }
      />

      <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-4">
        {CHADS.map((chad) => (
          <li key={chad.number} className="bg-background">
            <a href={chad.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={chad.image}
                  alt={`${chad.name} ${chad.number}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3 px-4 py-3.5">
                <div className="min-w-0">
                  <h3 className="truncate text-[13px] font-bold transition-colors group-hover:text-green">
                    {chad.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-muted">{chad.archetype}</p>
                </div>
                <span className="shrink-0 font-mono text-[12px] text-green">{chad.number}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-6 border-l-2 border-green pl-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] text-muted">
            Also on Manifold:{" "}
            <span className="text-foreground">Sounds of Gaia #001 — Ecstatic Ecosystems</span>
          </p>
          <p className="mt-1 text-[14px] text-muted">
            A music video for the regenerative movement. Revenue split: ⅓ Gaia
            treasury, ⅓ landscape restoration, ⅓ artist.
          </p>
        </div>
        <Button href="https://manifold.gallery/gaiaai" external className="shrink-0">
          View on Manifold
        </Button>
      </div>
    </Section>
  );
}
