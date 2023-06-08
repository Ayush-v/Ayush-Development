import Header from "@/components/header";

import { Nanum_Pen_Script } from "next/font/google";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-full flex-1">{children}</main>
      <footer
        className={`${nanumPen.className} mx-auto w-full max-w-screen-2xl px-4 pb-6 text-white/50`}
      >
        <div className="flex items-center justify-between border-b border-white/50 pb-2">
          <h1 className="text-lg">
            <span className="font-inter text-sm">Designed and Created By</span>{" "}
            <br />
            Ayush 🤟🏻
          </h1>
          <ul className="flex gap-3 font-inter text-sm sm:gap-10">
            <li>
              <a
                href="https://www.instagram.com/ayush_iosdev/"
                target="_blank"
                rel="noreferrer"
                className="border-dotted transition duration-200 hover:border-b-2 hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ayush-v"
                target="_blank"
                rel="noreferrer"
                className="border-dotted transition duration-200 hover:border-b-2 hover:text-white"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayush2711"
                target="_blank"
                rel="noreferrer"
                className="border-dotted transition duration-200 hover:border-b-2 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="flex items-center justify-end gap-1 text-right text-lg sm:text-2xl">
          <span className="font-inter text-sm">©</span>
          {new Date().getFullYear()} Ayush
        </p>
      </footer>
    </div>
  );
}
