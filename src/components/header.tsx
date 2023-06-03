import Link from "next/link";
import Icon from "./icons";
import NavBar from "./navbar";

import { Nanum_Pen_Script } from "next/font/google";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    // <div className="">
    /* <div className="relative mx-4"> */
    /* <header className="absolute left-1/2 top-8 z-10 mb-5 w-full max-w-screen-xl -translate-x-1/2 px-4"> */
    <header className="mx-auto mt-8 w-full max-w-screen-xl px-4">
      <div className="flex items-center justify-between overflow-hidden">
        <Link href="/">
          <span className={`${nanumPen.className} text-5xl`}>&lt;A&gt;</span>
        </Link>
        <NavBar />
        <div className="flex gap-4">
          <Icon name="Github" size="20" />
          <Icon name="Moon" size="20" />
        </div>
      </div>
    </header>
    // </div>
  );
}
