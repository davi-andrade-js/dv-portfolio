import React from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="motion-area justify-center">
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
      </div>

      <div className="flex flex-col">
        <header className="flex flex-row justify-between w-full h-24">
          <div className="z-10 flex flex-col font-covesLight">
            <p className=" left-0 top-0 text-2xl md:text-6xl lg:text-6xl">Davi Andrade</p>
            <p className=" left-0 top-0 text-md md:text-2xl lg:text-2xl">Programador FrontEnd</p>
          </div>
          <div className="z-10">
            <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <main className="mt-11 flex flex-row justify-between">
          <Sidebar activeSection={"home"} />

          <div className="z-[80] justify-end">
            <article className="z-10 text-sm w-[150px] font-poppinsRegular">
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
