import React from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div
        // style={{ margin: "32px !important" }}
        className="motion-area justify-center m-[20px] h-[91vh] lg:m-[32px]"
      >
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
      </div>

      <div className="flex flex-col h-full">
        <main className="flex flex-row h-full justify-between">
          <Sidebar activeSection={"home"} />

          <div className="z-[80] justify-end">
            <article className="z-10 flex text-xs md:text-sm lg:text-sm w-32 md:w-40 lg:w-40 font-poppinsRegular text-end">
              <p>
                {
                  "Graduando em Análise e Desenvolvimento de Sistemas e, além da faculdade, trabalho e estudo com programação Web. Antes do meu primeiro 'Hello World', fiz trabalhos voluntários e estive à frente do protagonismo estudantil no ensino médio."
                }
              </p>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
