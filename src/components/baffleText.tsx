"use client";
import { cn } from "@/utils/tailwind-merge";
import { useEffect, useRef } from "react";
// @ts-ignore-next-line
import { shuffle, ShuffleOptions } from "txt-shuffle";

interface ShuffleTextProps {
  text: string;
  className: string;
}

export default function BaffleText({ text, className }: ShuffleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: ShuffleOptions = {
      text,
      fps: 60,
      glyphs: "█▓>█ ▒░/▒░ <█░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      duration: 1.5,
      onUpdate: (output: string) => {
        if (containerRef.current) {
          containerRef.current.innerText = output;
        }
      },
    };

    shuffle(options);
  }, [text]);

  return (
    <span ref={containerRef} className={cn(className)}>
      {text}
    </span>
  );
}
