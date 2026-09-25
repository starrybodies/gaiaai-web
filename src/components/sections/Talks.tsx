"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { TALKS } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";

function VideoEmbed({ talk }: { talk: (typeof TALKS)[number] }) {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="group/play relative block aspect-video w-full cursor-pointer bg-background"
        aria-label={`Play ${talk.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbUrl}
          alt={talk.title}
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover/play:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green shadow-[0_0_30px_var(--color-green-glow)] transition-transform group-hover/play:scale-110">
            <Play size={22} className="text-background ml-1" fill="currentColor" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative aspect-video bg-background">
      <iframe
        src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1`}
        title={talk.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export function Talks() {
  return (
    <Section id="talks">
      <SectionHeading label="Talks & Media" title="Sharing the vision" />

      <ul className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {TALKS.map((talk) => (
          <li key={talk.videoId} className="flex flex-col">
            <div className="panel overflow-hidden">
              <VideoEmbed talk={talk} />
            </div>
            <p className="mt-5 font-mono text-[12px] text-green">{talk.event}</p>
            <h3 className="mt-2 text-[17px] font-bold leading-snug">{talk.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{talk.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
