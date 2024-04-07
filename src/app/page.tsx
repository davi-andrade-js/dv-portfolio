import React from "react";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      {/* <main className="z-10 flex h-full w-full flex-row items-end justify-between md:w-fit md:flex-row"> */}
      <article className="font-poppinsRegular z-10 flex cursor-default flex-col items-end space-y-3 text-end text-sm transition-all md:h-full md:text-base">
        <p className="w-36 transition-all md:w-40">
          {`Desenvolvedor Web e Graduando em Análise e Desenvolvimento de Sistemas. Antes do meu primeiro "Hello World", fiz trabalhos voluntários e estive engajado no protagonismo estudantil durante o ensino médio.`}
        </p>
        <Resume />
      </article>
      {/* </main> */}
    </>
  );
}
