"use client";
import Image from "next/image";
import React from "react";
import "/src/app/globals.css";

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");

  const projects = [
    {
      name: "Lorem ipsum",
      info: "portfólio pessoal",
      description: "Showcasing my most brilliant projects.",
      screenshot: "/portfolio.png",
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      name: "Player de Música Retrô",
      info: "web app com visual retrô",
      description: "Um player de música inspirado no visual do Windows 95.",
      screenshot: "/retro-music-player.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
    },
    {
      name: "Thinker AI",
      info: "ferramentas de IA",
      description: "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "/thinker.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
      liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
    },
    {
      name: "Calc.js",
      info: "calculadora",
      description: "Calculadora feita com JavaScript para praticar lógica e estilização.",
      screenshot: "/calc.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
    },
    {
      name: "Weather App",
      info: "app de clima",
      description: "Aplicação de clima feita com React e OpenWeatherAPI.",
      screenshot: "/weather.png",
      repositoryUrl: "",
      liveUrl: "",
    },
  ];

  return (
    <div className="flex flex-row h-fit justify-end space-x-4">
      <div className="w-auto">
        {projectOnHover !== "" ? (
          <Image
            key={projectOnHover}
            src={projectOnHover}
            alt={"screenshot"}
            width={600}
            height={100}
          />
        ) : (
          <></>
        )}
        {/* <Image key={projectOnHover} src={projectOnHover} alt={"screenshot"} /> */}
      </div>

      <article className="z-10 text-nowrap flex flex-col items-end">
        {projects.map((project) => (
          <>
            {projects.indexOf(project) !== 0 ? (
              <div className={"border-t-2 border-t-stone-900 w-full"}></div>
            ) : (
              <></>
            )}

            <div className="flex flex-row space-x-3 w-full items-center justify-between pt-4 pb-4">
              <p key={project.info} className="text-sm font-poppinsRegular">
                {project.info}
              </p>
              <p
                key={project.name}
                className="cursor-pointer hover:text-stone-400 transition text-3xl font-covesLight"
                onMouseEnter={() => setProjectOnHover(project.screenshot)}
                onMouseLeave={() => setProjectOnHover(project.screenshot)}
              >
                {project.name}
              </p>
            </div>
          </>
        ))}
      </article>
    </div>
  );
}
