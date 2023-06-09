import BaffleText from "@/components/baffleText";
import Container from "@/components/container";

export default function ProjectPage() {
  return (
    <Container>
      <div className="p-8">
        <BaffleText
          text="Work / Projects"
          className="text-sm uppercase opacity-80"
        />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Project Page
        </h1>
      </div>
    </Container>
  );
}
