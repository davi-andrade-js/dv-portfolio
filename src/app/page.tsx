import React from "react";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <main className="flex h-full w-full flex-col justify-between md:flex-row">
        <div></div>

        <div className="z-10 flex w-full justify-end">
          <article className="font-poppinsRegular flex w-32 cursor-default flex-col items-end space-y-3 text-end text-xs transition-all md:w-40 md:text-base">
            <p className="transition-all">
              {`Desenvolvedor Web e Graduando em Análise e Desenvolvimento de Sistemas. Antes do meu primeiro "Hello World", fiz trabalhos voluntários e estive engajado no protagonismo estudantil durante o ensino médio.`}
            </p>
            <Resume />
          </article>
        </div>
      </main>
    </>
  );
}
