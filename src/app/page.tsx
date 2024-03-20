import React from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ProjectsList from "./components/ProjectsList";

export default function Home() {
  return (
    <>
      <div className="noise"></div>

      <section className=" br-[12px bg-white br-[12px] grid grid-cols-4 grid-rows-5 h-[89vh] p-5 m-11 ">
        <div className="motion-area justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        </div>

        <header className="grid justify-between w-full col-start-1 row-start-1 col-end-5 row-end-2">
          <div className="z-10 flex flex-col font-mono text-sm">
            <p className=" left-0 top-0 lg:static lg:w-auto text-2xl w-fit">Davi Andrade</p>
            <p className=" left-0 top-0  lg:static lg:w-auto text-xl">Programador FrontEnd</p>
          </div>
          <div className="z-10 w-30 grid col-start-4">
            <Image width={60} height={600} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <Sidebar />

        <div className="grid justify-end col-start-4">
          <article className="z-10 font-mono text-[15px]">
            <p className=" w-[150px]">
              {
                "Graduando em Análise e Desenvolvimento de Sistemas e, além da faculdade, estudo programação online para aprimorar continuamente minhas habilidades. Antes do meu primeiro 'Hello World', fiz trabalhos voluntários e estive à frente do protagonismo estudantil no ensino médio."
              }
            </p>
          </article>
        </div>
      </section>

      <section className="border border-gray-500 br-[12px] grid grid-cols-4 grid-rows-5 h-[89vh] p-5 m-11 ">
        <header className="grid justify-between w-full col-start-1 row-start-1 col-end-5 row-end-2">
          <div className="z-10 flex flex-col font-mono text-sm">
            <p className=" left-0 top-0 lg:static lg:w-auto text-2xl">DV</p>
            {/* <p className=" left-0 top-0  lg:static lg:w-auto text-xl"></p> */}
          </div>
          <div className="z-10 w-30 grid col-start-4">
            <Image width={60} height={600} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <Sidebar />

        <ProjectsList />
      </section>
    </>
  );
}
