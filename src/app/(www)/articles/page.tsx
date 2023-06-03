import Container from "@/components/container";
import NewBlog from "./new-blog.mdx";
import HelloWorld from "@/app/hello.mdx";

export const metadata = {
  title: "Articles",
  description: "all Articles",
};

export default function page() {
  return (
    <main
    // className="bg-square relative min-h-screen w-screen pt-24"
    >
      <Container>
        <div className="mb-20 max-w-2xl p-8">
          <span className="text-sm uppercase opacity-80">
            {/* <TextReveal text="designer / developer" /> */}
            articles / blogs
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Cracking the Code Dungeons
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            exploring the coding world with my knowledege
          </p>
        </div>
        {/* <div className="mdx mx-auto max-w-3xl p-8 dark:mdx-invert">
          <NewBlog />
          <HelloWorld />
        </div> */}
        <div></div>
      </Container>
      <div className="bg-square fixed inset-0 -z-50" />
    </main>
  );
}
