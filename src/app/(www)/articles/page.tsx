import BaffleText from "@/components/baffleText";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Articles",
  description: "all Articles",
};

const articleArray = [
  {
    date: "Sep 29, 2023",
    title: "My Very First Post",
    description:
      "Learn how to split traffic for A/B testing between different page layouts while retaining the same user-facing URL, using Netlify Edge Functions.",
    timeToRead: "3",
    tag: ["TailwindCss", "Typescript", "Nextjs"],
    image:
      "https://images.unsplash.com/photo-1655721532485-0fba33207593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
  },
  {
    date: "Sep 19, 2023",
    title: "My Second Post",
    description: "Learn how to sg URL, using Netlify Edge Functions.",
    timeToRead: "15",
    tag: ["Typescript", "Nextjs"],
    image:
      "https://images.unsplash.com/photo-1682124159242-393354d119f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  },
] as const;

export default function page() {
  return (
    <>
      <Container>
        <div className="mb-8 max-w-2xl p-8 md:mb-20">
          <BaffleText
            text="articles / blogs"
            className="text-sm uppercase opacity-80"
          />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Cracking the Code Dungeons
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            exploring the coding world with my knowledege
          </p>
        </div>
        <div className="relative m-8 space-y-14">
          {articleArray.map((article, id) => (
            <ArticleTile key={id} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}

function ArticleTile({ article }: { article: (typeof articleArray)[number] }) {
  return (
    <div key={article.title}>
      <time className="mb-4 flex items-center gap-3" dateTime={article.date}>
        <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
        <span>{article.date}</span>
      </time>
      <Link href={`/articles/${encodeURI(article.title)}`}>
        <div className="flex flex-col rounded-2xl border border-zinc-800 bg-black bg-opacity-5 p-2.5 backdrop-blur-sm backdrop-filter md:flex-row md:gap-6">
          <div className="relative aspect-video w-full flex-none overflow-hidden rounded-xl md:aspect-square md:w-56">
            <Image
              src={article.image}
              alt=""
              width={3024}
              height={4032}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="my-4 space-y-1.5">
            <h3 className="text-xl font-bold md:text-3xl">{article.title}</h3>
            <p className="opacity-50">{article.description}</p>
            <ul className="space-x-2">
              {article.tag.map((tag) => (
                <li
                  key={tag}
                  className="from-black/ inline-block rounded-full border border-zinc-800 bg-gradient-to-b from-black/5 to-white/10 px-3 py-1 text-xs font-semibold backdrop-blur dark:from-black"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <time className="absolute bottom-5 right-6">
            {article.timeToRead} min read
          </time>
        </div>
      </Link>
    </div>
  );
}
