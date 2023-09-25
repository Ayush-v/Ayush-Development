import Image from "next/image";
import profilePic from "../../../public/ayush-profile.png";
import LinkList, { type LinkListType } from "@/components/linkList";
import Icon from "@/components/icons";
import Link from "next/link";
import type { Metadata } from "next";
import CopyEmail from "@/components/copyEmail";
import ThemeToggleButton from "@/components/themeToggleButton";
import { useTheme } from "next-themes";
import { cn } from "@/utils/tailwind-merge";

export const metadata: Metadata = {
  title: "Ayush LinkTree",
  description:
    "Explore my web development journey through these links. Connect with me on GitHub, Twitter, and LinkedIn, and discover my personal portfolio showcasing my projects and skills.",
};

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
  // const theme = useTheme();

  return (
    <>
      <main
        className={cn(
          "relative mx-auto max-w-screen-md overflow-hidden px-4 pt-24 links-pattern"
          // theme.theme === "light" ? "links-pattern-light" : "links-pattern"
        )}
      >
        <ThemeToggleButton />
        <div className="gradient-bg-to-b mx-auto w-fit overflow-hidden rounded-full p-2">
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
            <Link className="gradient-bg-to-b rounded-md px-4 py-2" href="/">
              Website
            </Link>
            <CopyEmail />
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
