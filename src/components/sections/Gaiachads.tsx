"use client";

import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { ArrowRight } from "lucide-react";

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
    <section id="gaiachads" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">GaiaChads Collection</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Regenerative archetypes,{" "}
              <span className="text-gradient">sold out</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-[14px] max-w-2xl mx-auto leading-[1.8]">
              A limited-edition PFP collection of regenerative AI agents — each
              representing a dimension of planetary healing. The series sold out
              on Manifold. Holders gain early access, alpha, and governance roles
              in the Gaia ecosystem.
            </p>
          </ScrollReveal>
        </div>

        {/* Chad grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          staggerDelay={0.08}
        >
          {CHADS.map((chad) => (
            <StaggerItem key={chad.number}>
              <a
                href={chad.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden transition-all hover:border-green/20 hover:bg-surface-light"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={chad.image}
                    alt={`${chad.name} ${chad.number}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                  <span className="absolute top-2 right-2 text-[11px] font-mono text-green/60 bg-surface/70 backdrop-blur-sm rounded px-1.5 py-0.5">
                    {chad.number}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-[13px] font-semibold mb-1 leading-tight">
                    {chad.name}
                  </h3>
                  <p className="text-[11px] text-muted/60">{chad.archetype}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Sounds of Gaia mention */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center sm:text-left">
              <p className="text-[13px] text-muted">
                Also on Manifold:{" "}
                <span className="text-foreground/80">
                  Sounds of Gaia #001 — Ecstatic Ecosystems
                </span>
              </p>
              <p className="text-[11px] text-muted/50 mt-1">
                A music video for the regenerative movement. Revenue split: ⅓
                Gaia treasury · ⅓ landscape restoration · ⅓ artist.
              </p>
            </div>
            <a
              href="https://manifold.gallery/gaiaai"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center gap-2 rounded-md border border-green/30 px-6 py-3 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
            >
              View on Manifold
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
