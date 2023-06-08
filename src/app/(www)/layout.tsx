import Header from "@/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-full flex-1">{children}</main>
      <footer className="font-sans">footer</footer>
    </div>
  );
}
