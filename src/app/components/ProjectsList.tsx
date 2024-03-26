"use client";

import Image from "next/image";
import React from "react";
import "/src/app/globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";

// TODO exclude lg where not needed

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");

  const projects = [
    {
      name: "Davi Andrade",
      info: "portfólio",
      description: "Showcasing my most brilliant projects.",
      screenshot: "/portfolio.png",
      repositoryUrl: "",
      liveUrl: "",
      technologies: ["TypeScript", "React", "Next.js", "TailwindCSS", "Shadcn/ui"],
    },
    {
      name: "Player de Música Retrô",
      info: "tocador de música",
      description: "Um player de música inspirado no visual do Windows 95.",
      screenshot: "/retro-music-player.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
      technologies: ["TypeScript", "React", "Next.js", "TailwindCSS", "Shadcn/ui"],
    },
    {
      name: "Thinker AI",
      info: "ferramentas de IA",
      description: "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "/thinker.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
      liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
      technologies: ["TypeScript", "React", "Next.js", "TailwindCSS", "Shadcn/ui"],
    },
    {
      name: "Calc.js",
      info: "calculadora",
      description: "Calculadora feita com JavaScript para praticar lógica e estilização.",
      screenshot: "/calc.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
      technologies: ["TypeScript", "React", "Next.js", "TailwindCSS", "Shadcn/ui"],
    },
    {
      name: "Weather App",
      info: "app de clima",
      description: "Aplicação de clima feita com React e OpenWeatherAPI.",
      screenshot: "/weather.png",
      repositoryUrl: "",
      liveUrl: "",
      technologies: ["TypeScript", "React", "Next.js", "TailwindCSS", "Shadcn/ui"],
    },
  ];

  return (
    <>
      <div className="flex flex-row w-2/4 h-full lg:justify-end font-poppinsRegular lg:items-end ">
        <ScrollArea className="h-full w-fit">
          <div className="flex flex-col space-y-6">
            {projects.map((project) => (
              <>
                {projects.indexOf(project) !== 0 ? (
                  <div className={"border border-t-stone-900 w-full"}></div>
                ) : (
                  <></>
                )}

                <div className="flex flex-row space-x-3 w-full h-fit p-2">
                  <div className="w-fit">
                    <Image
                      key={project.screenshot}
                      src={project.screenshot}
                      alt="screenshot"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <div className="text-lg">{project.name}</div>
                      <div className="text-stone-500">{project.description}</div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <div className="z-10 w-full md:w-fit text-nowrap flex flex-col items-end">
            {projects.map((project) => (
              <>
                {projects.indexOf(project) !== 0 ? (
                  <div className={"border-t-2 border-t-stone-900 w-full"}></div>
                ) : (
                  <></>
                )}

                <div
                  className="flex flex-row hover:text-stone-400 transition duration-300 w-full items-center justify-between md:space-x-6 py-3 sm:py-4 lg:py-4"
                  onMouseEnter={() => setProjectOnHover(project.screenshot)}
                  onMouseLeave={() => setProjectOnHover("")}
                >
                  <p
                    key={project.info}
                    className="text-xs md:text-sm lg:text-sm font-poppinsRegular"
                  >
                    {project.info}
                  </p>
                  <p
                    key={project.name}
                    className="cursor-pointer text-md md:text-3xl lg:text-3xl font-covesLight"
                  >
                    {project.name}
                  </p>
                </div>
              </>
            ))}
          </div> */}
        </ScrollArea>
      </div>

      {/* <ScrollArea className="h-48 w-48 rounded-md border border-stone-900">
        <div>
          {projects.map((project) => (
            <p
              key={project.name}
              className="cursor-pointer text-md md:text-3xl lg:text-3xl font-covesLight"
            >
              {project.name}
            </p>
          ))}
        </div>
      </ScrollArea> */}
    </>
  );
}
