import { Nanum_Pen_Script } from "next/font/google";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      className={`${nanumPen.className} mx-auto mb-4 w-full max-w-screen-2xl px-4`}
    >
      <div className="flex items-center justify-between border-b border-black/20 pb-2 dark:border-white/20">
        <h1 className="text-lg">
          <span className="font-inter text-sm tracking-tighter">
            Designed and Created By
          </span>{" "}
          <br />
          <span className="text-xl">Ayush 🤟🏻</span>
        </h1>
        <ul className="flex space-x-1.5 font-inter text-sm sm:gap-10">
          <li>
            <a
              href="https://twitter.com/ayushverma1194"
              target="_blank"
              rel="noreferrer"
              className="border-dotted border-black transition duration-200 hover:border-b-2 dark:border-white"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ayush-v"
              target="_blank"
              rel="noreferrer"
              className="border-dotted border-black transition duration-200 hover:border-b-2 dark:border-white"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayush2711"
              target="_blank"
              rel="noreferrer"
              className="border-dotted border-black transition duration-200 hover:border-b-2 dark:border-white"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <p className="flex items-center justify-end gap-1 text-right text-lg sm:text-2xl">
        <span className="font-inter text-sm">©</span>
        <span className="font-inter text-sm">{new Date().getFullYear()}</span>
        Ayush
      </p>
    </footer>
  );
}
