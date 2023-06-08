import Container from "@/components/container";

export default function About() {
  return (
    <Container>
      <div className="p-8">
        <span className="mb-2 block text-sm opacity-80">About / Ayush</span>
        <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          👋🏻 Hi there, how are you?
        </h1>
        <p className="text-lg tracking-tight text-white/50">
          I am a UI/UX Designer and a developer who works with React, Nextjs
          Typescript.
        </p>
      </div>
    </Container>
  );
}
