import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>
        {/* <div className="noise"></div> */}
        <section className="z-10 border border-stone-900 bg-white h-[91vh] p-5 m-8 ">
          {children}
        </section>
      </body>
    </html>
  );
}
