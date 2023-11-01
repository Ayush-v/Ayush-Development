export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 h-full pt-10">
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}

      {children}
      <div className="bg-square fixed inset-0 -z-50" />
    </div>
  );
}
