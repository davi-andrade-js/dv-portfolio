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
      screenshot: "",
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      name: "Player de Música Retrô",
      description: "Um player de música inspirado no visual do Windows 95.",
      screenshot: "",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
    },
    {
      name: "Thinker AI",
      description: "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "",
      repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
      liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
    },
    {
      name: "Calc.js",
      description: "Calculadora feita com JavaScript para praticar lógica e estilização.",
      screenshot: "",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
    },
    {
      name: "Weather App",
      description: "Aplicação de clima feita com React e OpenWeatherAPI.",
      screenshot: "",
      repositoryUrl: "",
      liveUrl: "",
    },
  ];

  // TODO: fazer a condicional do projeto em hover

  return (
    <div className="grid justify-end col-start-4 row-start-2">
      <div className="w-lg flex flex-col items-end">
        {/* {projectOnHover === "" ? (
          <div>
            <p>Hello World</p>
          </div>
        ) : (
          <div>
            <p>Bye World</p>
          </div>
        )} */}

        {projectOnHover === "" ? (
          <p></p>
        ) : (
          <Image key={projectOnHover} src={projectOnHover} alt={"screenshot"} />
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
