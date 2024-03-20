"use client";
import Image from "next/image";
import React from "react";
import "/src/app/globals.css";

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");

  const projects = [
    {
      name: "Davi Andrade",
      description: "Showcasing my most brilliant projects.",
      screenshot: "/portfolio.png",
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      name: "Player de Música Retrô",
      description: "Um player de música inspirado no visual do Windows 95.",
      screenshot: "/retro-music-player.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
    },
    {
      name: "Thinker AI",
      description: "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "/thinker.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
      liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
    },
    {
      name: "Calc.js",
      description: "Calculadora feita com JavaScript para praticar lógica e estilização.",
      screenshot: "/calc.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
    },
    {
      name: "Weather App",
      description: "Aplicação de clima feita com React e OpenWeatherAPI.",
      screenshot: "/weather.png",
      repositoryUrl: "",
      liveUrl: "",
    },
  ];

  // TODO: fazer a condicional do projeto em hover

  return (
    <div className="flex flex-col max-w-52 h-fit justify-end items-end">
      <div className="w-80 h-44 flex flex-col items-end">
        {projectOnHover !== "" ? (
          <Image
            key={projectOnHover}
            src={projectOnHover}
            alt={"screenshot"}
            width={300}
            height={300}
          />
        ) : (
          <p></p>
        )}
        {/* <Image key={projectOnHover} src={projectOnHover} alt={"screenshot"} /> */}
      </div>

      <article className="z-10 text-xl w-fit flex flex-col gap-4 items-end">
        {projects.map((project) => (
          <p
            key={project.name}
            className="cursor-pointer hover:text-stone-400"
            onMouseEnter={() => setProjectOnHover(project.screenshot)}
            onMouseLeave={() => setProjectOnHover("")}
          >
            {project.name}
          </p>
        ))}
      </article>
    </div>
  );
}
