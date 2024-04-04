import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="flex h-full w-full flex-col justify-between md:flex-row">
        <Sidebar activeSection={"home"} />

        <div className="z-10 flex w-full justify-end">
          <article className="font-poppinsRegular flex w-32 cursor-default text-end text-xs transition-all md:w-40 md:text-base">
            <p className="transition-all">
              {`Desenvolvedor Web e Graduando em Análise e Desenvolvimento de Sistemas. Antes do meu primeiro "Hello World", fiz trabalhos voluntários e estive engajado no protagonismo estudantil durante o ensino médio.`}
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
