import React from "react";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <article className="fadeIn font-poppinsRegular z-10 flex cursor-default flex-col items-end space-y-3 text-end text-base transition-all md:h-full">
        <p className="w-40 transition-all">
          {`Oi! Sou um Desenvolvedor Web Front-End. Acredito que um software deve ser inspirador, funcional e, sobretudo, prezar pela experiência do usuário.`}
        </p>
        <Resume />
      </article>
    </>
  );
}
