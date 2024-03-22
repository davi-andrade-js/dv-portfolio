import React from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="noise"></div>

      <section className="z-10 border border-stone-900 bg-white h-[91vh] p-5 m-8 ">
        <div className="motion-area justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        </div>

        <header className="flex flex-row justify-between w-full h-24">
          <div className="z-10 flex flex-col font-covesLight">
            <p className=" left-0 top-0 lg:static lg:w-auto text-6xl w-fit">Davi Andrade</p>
            <p className=" left-0 top-0  lg:static lg:w-auto text-2xl">Programador FrontEnd</p>
          </div>
          <div className="z-10 w-30">
            <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <main className="mt-11 flex flex-row justify-between">
          <Sidebar activeSection={"home"} />

          {/* TODO switch div with article */}
          <div className="z-[80] justify-end">
            <article className="z-10 font-mono text-[16px]">
              <p className="z-10 w-[150px] font-Helvetica">
                {
                  "Graduando em Análise e Desenvolvimento de Sistemas e, além da faculdade, trabalho e estudo com programação Web. Antes do meu primeiro 'Hello World', fiz trabalhos voluntários e estive à frente do protagonismo estudantil no ensino médio."
                }
              </p>
            </article>
          </div>
        </main>
      </section>
    </>
  );
}
