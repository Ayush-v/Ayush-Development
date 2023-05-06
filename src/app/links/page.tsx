"use client";

import Image from "next/image";
import profilePic from "../../../public/ayush-profile.png";
import LinkList, { type LinkListType } from "@/components/linkList";
import Icon from "@/components/icons";
import { useState } from "react";

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
  const [copyState, setCopyState] = useState<string | null>(null);

  const handleCopyClick = async () => {
    setCopyState("Loading");
    try {
      await navigator.clipboard.writeText("ayushverma1194@gmail.com");
      // setTimeout(() => {}, 2500);
    } catch (error) {
      alert("Failed to copy email!");
      setCopyState("Error");
    } finally {
      setCopyState("Success");
      setTimeout(() => {
        setCopyState(null);
      }, 1500);
    }
  };

  return (
    <>
      <main className="mx-auto mt-24 max-w-screen-md px-4">
        <div className="mx-auto w-fit overflow-hidden rounded-full border border-white border-opacity-50 bg-black/70 p-2">
          <Image
            src={profilePic}
            alt="Profile"
            priority
            className="h-16 w-16 sm:h-28 sm:w-28"
          />
        </div>
        <div className="my-8 space-y-6">
          <h1 className="text-center text-4xl font-semibold">Ayush</h1>
          <p className="text-center text-lg opacity-80">
            Experienced UI/UX and Frontend Developer. Passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              className="rounded-md border border-white border-opacity-50 px-4 py-2"
              href="https://www.ayushportfolio.com/"
            >
              Website
            </a>
            <button
              onClick={handleCopyClick}
              className="flex items-center gap-3 rounded-md border border-white border-opacity-50 px-4 py-2"
            >
              <span>
                {copyState ? (
                  copyState === "Loading" ? (
                    ""
                  ) : copyState === "Error" ? (
                    <Icon name="Error" />
                  ) : copyState === "Success" ? (
                    <Icon name="Success" className="text-green-500" size="20" />
                  ) : (
                    ""
                  )
                ) : (
                  <Icon name="Copy" />
                )}
              </span>
              E-Mail
            </button>
          </div>
        </div>

        <div className="mt-14 space-y-4">
          {LinkArray.map((link) => (
            <LinkList
              key={link.href}
              title={link.title}
              href={link.href}
              icon={link.icon}
              description={link.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
