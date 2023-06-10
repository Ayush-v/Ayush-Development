import BaffleText from "@/components/baffleText";
import Container from "@/components/container";
import Icon from "@/components/icons";

export default function ContactPage() {
  return (
    <Container className="p-8">
      <div className="max-w-3xl space-y-1">
        <BaffleText
          text="Contact / Collaborate"
          className="text-sm uppercase opacity-80"
        />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          🛠️ Let&#39;s work together on your next project
        </h1>
        <p className="text-lg tracking-tight text-white/50">
          I&#39;m always happy to hear about exciting opportunities, join in
          interesting conversations, and build valuable connections. Let&#39;s
          connect!
        </p>
      </div>

      <div className="mx-auto mt-9 max-w-md space-y-2 sm:mx-0">
        <h3>Contact me via Email</h3>
        <div className="flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 px-2.5 py-3">
          <span>ayushverma@gmail.com</span>
          <button>
            <Icon name="Copy" className="ml-2" size="20" />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-md space-y-2 sm:mx-0">
        <h3>Follow me on Social Media</h3>
        <div className="flex items-center space-x-3">
          <button className="flex items-center justify-center rounded-full border border-zinc-800 bg-gradient-to-b from-black to-white/10 p-3 shadow-lg shadow-zinc-800/5 backdrop-blur">
            <Icon name="Github" size="20" />
          </button>
          <button className="flex items-center justify-center rounded-full border border-zinc-800 bg-gradient-to-b from-black to-white/10 p-3 shadow-lg shadow-zinc-800/5 backdrop-blur">
            <Icon name="Twitter" size="20" />
          </button>
          <button className="flex items-center justify-center rounded-full border border-zinc-800 bg-gradient-to-b from-black to-white/10 p-3 shadow-lg shadow-zinc-800/5 backdrop-blur">
            <Icon name="LinkedIn" size="20" />
          </button>
        </div>
      </div>
    </Container>
  );
}
