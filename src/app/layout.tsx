import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import MovingLights from "@/components/MovingLights";
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davi Andrade - Portfólio",
  description:
    "Davi Andrade é um Desenvolvedor FrontEnd que constrói sites inspiradores e funcionais.",
  keywords: ["Davi Andrade", "Desenvolvedor", "FrontEnd", "Web", "Portfólio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://dv-portfolio-three.vercel.app/" />
        <meta
          name="google-site-verification"
          content="Uckv1OhzImYml5YSpTMR2O6GXx9VW7t4XZvL-48vasQ"
        />
        <meta name="robots" content="index" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; img-src https://*; child-src 'none';"
        ></meta>
      </Head>
      <body className={inter.className}>
        <LoadingScreen />
        {/* <div className="noise"></div> */}
        <section className="z-10 m-5 mb-0 flex h-[91vh] flex-col rounded-xl p-3 md:m-7 md:p-2 lg:m-8 lg:mb-0 lg:p-5">
          <MovingLights />
          <Header />
          <main className="flex h-full w-full flex-col justify-between overflow-hidden md:flex-row">
            <Sidebar />
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
