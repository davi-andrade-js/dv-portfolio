import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davi Andrade",
  description: "Davi's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-zinc-200 " + inter.className}>
        <div className="noise"></div>
        <section className="flex flex-col z-10 border border-stone-900 h-[91vh] p-2 md:p-5 lg:p-5 m-5 md:m-8 lg:m-8">
          <Header />
          {children}
        </section>
      </body>
    </html>
  );
}
