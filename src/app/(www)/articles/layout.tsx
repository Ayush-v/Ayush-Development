export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}

      {children}
      <div className="bg-square fixed inset-0 -z-50" />
    </>
  );
}
