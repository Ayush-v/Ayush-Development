"use client";

import Image from "next/image";
import profilePic from "../../../public/ayush-profile.png";
import LinkList, { type LinkListType } from "@/components/linkList";
import Icon from "@/components/icons";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// export const metadata = {
//   title: "Ayush LinkTree",
//   description: "all the links",
// };

const LinkArray: LinkListType[] = [
  {
    title: "My Github",
    description: "github.com/Ayush-v",
    href: "https://github.com/Ayush-v",
    icon: <Icon name="Github" size="40" />,
  },
  {
    title: "My LinkedIn",
    description: "linkedin.com/in/ayush2711",
    href: "https://www.linkedin.com/in/ayush2711/",
    icon: <Icon name="LinkedIn" size="50" className="text-[#0B66C2]" />,
  },
];

export default function Home() {
  const [copyState, setCopyState] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard
      .writeText("ayushverma1194@gmail.com")
      .then(() => {
        setCopyState(true);
        setTimeout(() => {
          setCopyState(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { theme, setTheme } = useTheme();
  return (
    <>
      <main className="links-pattern relative mx-auto max-w-screen-md overflow-hidden px-4 pt-24">
        <button
          className="absolute right-16 top-10 rounded-full bg-black/10 p-3 dark:bg-white/10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Icon name={theme === "light" ? "Sun" : "Moon"} size="20" />
        </button>
        <div className="mx-auto w-fit overflow-hidden rounded-full border border-zinc-400 bg-black/10 p-2 dark:border-zinc-800 dark:bg-black/70">
          <Image
            src={profilePic}
            alt="Profile"
            priority
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
        </div>
        <div className="my-8 space-y-6">
          <h1 className="text-center text-4xl font-semibold">Ayush</h1>
          <p className="text-center text-lg opacity-80">
            Experienced UI/UX and Frontend Developer. Passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              className="rounded-md border border-black border-opacity-50 px-4 py-2 dark:border-white"
              href="/"
            >
              Website
            </Link>
            {/* <a
              className="rounded-md border border-white border-opacity-50 px-4 py-2"
              href="https://www.ayushportfolio.com/"
            >
              Website
            </a> */}
            <button
              onClick={handleCopyClick}
              className="flex items-center gap-3 rounded-md border border-black border-opacity-50 px-4 py-2 dark:border-white"
            >
              <span>
                {copyState ? (
                  <Icon name="Success" size="20" className="text-green-500" />
                ) : (
                  <Icon name="Copy" />
                )}
              </span>
              E-Mail
            </button>
          </div>
        </div>

        <div className="my-14 space-y-4">
          {LinkArray.map((link) => (
            <LinkList key={link.href} {...link} />
          ))}
        </div>
      </main>
    </>
  );
}
