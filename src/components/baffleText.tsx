"use client";
import { cn } from "@/utils/tailwind-merge";
import { HTMLProps, useEffect, useRef } from "react";
// @ts-ignore-next-line
import { shuffle, ShuffleOptions } from "txt-shuffle";

interface ShuffleTextProps extends HTMLProps<HTMLSpanElement> {
  text: string;
}

export default function BaffleText({
  text,
  className,
  ...props
}: ShuffleTextProps) {
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
    <span ref={containerRef} className={cn(className)} {...props}>
      {text}
    </span>
  );
}
