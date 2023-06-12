import BaffleText from "@/components/baffleText";
import Container from "@/components/container";

export default function About() {
  return (
    <Container>
      <div className="group p-8">
        {/* <span className="mb-2 block text-sm opacity-80">About / Ayush</span> */}
        <BaffleText
          text="About / Ayush"
          className="text-sm uppercase opacity-80"
        />
        <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <span className="animate-shake">👋🏻</span>
          Hi there, how are you?
        </h1>
        <p className="text-lg tracking-tight text-black/50 dark:text-white/50">
          I am a UI/UX Designer and a developer who works with React, Nextjs
          Typescript.
        </p>
      </div>
      <div className="space-y-14 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
          <span className="w-80 font-medium">About</span>
          <p className="flex-1 text-black/75 dark:text-white/75">
            I am a self-taught UI/UX Designer who specialises in Web Development
            and Also Into some backend.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
          <span className="w-80 font-medium">Education</span>
          <p className="flex-1 text-black/75 dark:text-white/75">
            I hold a Bachelor&#39;s Degree in Computer Applications from Panjab
            University, Chandigarh.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
          <span className="w-80 font-medium">My Story as a Designer</span>
          <div className="flex-1 space-y-4">
            <p className="text-black/75 dark:text-white/75">
              I started my journey as a designer by designing websites and
              mobile apps. I began coding for fun, but soon fell in love with
              it. Since then, I have enjoyed converting my designs into reality.
            </p>
            <p className="text-black/75 dark:text-white/75">
              I started on the web in 2018. I had just left my job and wanted to
              start an online clothing brand. I needed a website but didn&#39;t
              have the budget for it. After receiving exorbitant offers from
              several companies I realized I was going to have to do my website
              on my own. At that time, I didn&#39;t know about Webflow so I
              started to learn how to code in HTML, CSS and javascript. A few
              months later, my website was coming to life.
            </p>
            <p className="text-black/75 dark:text-white/75">
              I am a self-taught UI/UX Designer who specialises in Web
              Development and Also Into some backend.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
