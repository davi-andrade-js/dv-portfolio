import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="flex h-full flex-col">
        <main className="flex h-full flex-row justify-between">
          <Sidebar activeSection={"home"} />

          <div className="z-[80] justify-end">
            <article className="font-poppinsRegular z-10 flex w-32 cursor-default text-end text-xs md:w-40 md:text-base lg:w-40 lg:text-base">
              <p>
                {`Graduando em Análise e Desenvolvimento de Sistemas. Gosto muito de arte e a consumo em forma de livros, jogos e cinema. Antes do meu primeiro "Hello World", fiz trabalhos voluntários e estive engajado no protagonismo estudantil durante o ensino médio.`}
              </p>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
