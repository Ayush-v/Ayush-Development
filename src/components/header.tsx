import Link from "next/link";
import Icon from "./icons";
import NavBar from "./navbar";

import { Nanum_Pen_Script } from "next/font/google";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum",
});

export default function Header() {
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
          <Icon name="Moon" size="20" />
        </div>
      </div>
    </header>
  );
}
