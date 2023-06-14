"use client";

import Link from "next/link";
import Icon from "./icons";
import NavBar from "./navbar";

import { Nanum_Pen_Script } from "next/font/google";
import { useTheme } from "next-themes";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum",
});

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="mx-auto w-full max-w-screen-2xl px-4 pt-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <span className={`${nanumPen.variable} font-nanum text-5xl`}>
            &lt;A&gt;
          </span>
        </Link>
        <NavBar />
        <div className="flex items-center gap-4">
          <a href="https://github.com/Ayush-v" target="_blank" rel="noreferrer">
            <Icon name="Github" size="24" />
          </a>
          <button
            className="gradient-bg-to-b rounded-full p-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Icon name={theme === "light" ? "Sun" : "Moon"} size="20" />
          </button>
        </div>
      </div>
    </header>
  );
}
