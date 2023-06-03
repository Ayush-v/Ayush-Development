import Header from "@/components/header";
// import "@/styles/globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata = {
//   title: "Developer Ayush",
//   description: "",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} overflow-x-hidden font-inter`}>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}

      <Header />
      {children}
    </section>
  );
}
