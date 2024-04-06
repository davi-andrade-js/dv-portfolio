import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import MovingLights from "@/components/MovingLights";
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";
import LoadingScreen from "@/components/LoadingScreen";
// import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davi Andrade - Portfólio (BETA)",
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
        <link
          rel="canonical"
          href="https://dv-portfolio-davis-projects-820de78a.vercel.app/"
        />
        <meta name="robots" content="noindex" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; img-src https://*; child-src 'none';"
        ></meta>
      </Head>
      <body className={inter.className}>
        <LoadingScreen />
        <div className="noise"></div>
        <section className="z-10 m-5 mb-0 flex h-[91vh] flex-col rounded-xl p-2 md:m-8 md:p-5 lg:m-8 lg:mb-0 lg:p-5">
          <MovingLights />
          <Header />
          <main className="flex w-full flex-row justify-between overflow-hidden">
            <Sidebar />
            {children}
          </main>
          {/* <Toaster /> */}
        </section>
        <footer className="font-poppinsRegular z-10 ml-5 text-xs text-zinc-600 md:ml-8 md:pl-5 md:pt-2">
          Esta é a versão beta. Responsividade e algumas correções estão em
          desenvolvimento.
        </footer>
      </body>
    </html>
  );
}
