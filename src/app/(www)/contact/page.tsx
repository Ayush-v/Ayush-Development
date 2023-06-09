import BaffleText from "@/components/baffleText";
import Container from "@/components/container";

export default function ContactPage() {
  return (
    <Container>
      <div className="p-8">
        <BaffleText
          text="Contact / Collaborate"
          className="text-sm uppercase opacity-80"
        />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Contact Page
        </h1>
      </div>
    </Container>
  );
}
