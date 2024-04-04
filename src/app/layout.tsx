import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import MovingLights from "@/components/MovingLights";
import Header from "../components/Header";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davi Andrade (BETA)",
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
        {/* <LoadingScreen /> */}
        <div className="noise"></div>
        <section className="z-10 m-5 mb-0 flex h-[91vh] flex-col rounded-xl p-2 md:m-8 md:p-5 lg:m-8 lg:mb-0 lg:p-5">
          <MovingLights />
          <Header />
          {children}
          <Toaster />
        </section>
        <footer className="font-poppinsRegular z-10 ml-5 text-xs text-zinc-600 md:ml-8 md:pl-5 md:pt-2">
          Esta é a versão beta. Responsividade e algumas correções estão em
          desenvolvimento.
        </footer>
      </body>
    </html>
  );
}
