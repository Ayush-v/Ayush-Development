export const metadata = {
  title: "Ayush LinkTree",
  description: "all the links",
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}

      {children}
    </>
  );
}
