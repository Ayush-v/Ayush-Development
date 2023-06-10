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
        <div className="flex gap-4">
          <Icon name="Github" size="20" />
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Icon name="Moon" size="20" />
          </button>
        </div>
      </div>
    </header>
  );
}
