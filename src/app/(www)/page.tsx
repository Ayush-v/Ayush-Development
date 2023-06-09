import AnimatedStroke from "@/components/animatedStroke";
import BaffleText from "@/components/baffleText";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="mx-auto flex h-full w-full max-w-screen-xl flex-1 flex-col items-center gap-8 px-4 py-12 md:px-6 lg:flex-row lg:justify-between lg:gap-16">
      <div>
        <BaffleText
          text="designer / developer"
          className="text-sm uppercase opacity-80"
        />
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-semibold lg:text-7xl">
          Hi, Im{" "}
          <span className="relative whitespace-nowrap">
            <AnimatedStroke />
            Ayush
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl pr-4 text-lg tracking-tight text-white/50">
          I love making the world a better place with my design and coding
          skills. You&#39;re at the right place if you want to see how I can
          bring your designs to life.
        </p>
      </div>
      <Image
        src={"/images/heroImage.png"}
        alt=""
        priority
        width={400}
        height={540}
        className="h-auto max-h-[635px] w-auto rounded-2xl bg-cover bg-bottom bg-no-repeat"
      />
    </section>
  );
}
