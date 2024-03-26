"use client";

import Image from "next/image";
import React from "react";
import "/src/app/globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// TODO exclude lg where not needed

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");
  const [linkOnHover, setLinkOnHover] = React.useState("");

  const projects = [
    {
      name: "Davi Andrade",
      info: "portfólio",
      description: "Portfólio pessoal",
      screenshot: "/portfolio.png",
      repositoryUrl: "https://github.com/davi-andrade-js/dv-portfolio",
      liveUrl: "",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn/ui",
      ],
      year: "2024",
    },
    {
      name: "Thinker AI",
      info: "ferramentas de IA",
      description:
        "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "/thinker.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
      liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn/ui",
        "OpenAI API",
        "Replicate API",
      ],
      year: "2024",
    },
    {
      name: "Player de Música Retrô",
      info: "tocador de música",
      description: "Player de música inspirado no visual do Windows 95.",
      screenshot: "/retro-music-player.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
      technologies: ["JavaScript Vanilla", "HTML", "CSS"],
      year: "2023",
    },
    {
      name: "Calc.js",
      info: "calculadora",
      description:
        "Calculadora feita com JavaScript para praticar lógica e estilização.",
      screenshot: "/calc.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
      technologies: ["JavaScript Vanilla", "HTML", "CSS"],
      year: "2023",
    },
    {
      name: "Weather App",
      info: "app de clima",
      description: "Aplicação de clima feita com React e OpenWeatherAPI.",
      screenshot: "/weather.png",
      repositoryUrl: "",
      liveUrl: "",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      year: "2024",
    },
  ];

  return (
    <>
      <div className="font-poppinsRegular flex h-full w-3/5 flex-row lg:items-end lg:justify-end ">
        <ScrollArea className="h-full w-3/4">
          <div className="flex flex-col space-y-5">
            {projects.map((project) => (
              <>
                {projects.indexOf(project) !== 0 ? (
                  <div
                    className={
                      "w-full border border-transparent border-t-stone-900"
                    }
                  ></div>
                ) : (
                  <></>
                )}

                <div
                  className={`flex h-fit w-full cursor-default flex-row space-x-5 rounded-xl p-2 ${projectOnHover === project.name ? "card" : ""}`}
                  onMouseEnter={() => setProjectOnHover(project.name)}
                  onMouseLeave={() => setProjectOnHover("")}
                >
                  <div className="flex w-[90%] flex-col items-end justify-between space-y-4">
                    <div className="flex w-full flex-col items-end">
                      <header className="font-poppinsRegular flex w-full flex-row justify-between">
                        <div>{project.year}</div>
                        <div className="font-covesBold flex text-xl">
                          {project.name}
                        </div>
                      </header>

                      <div className="text-right text-stone-700">
                        {project.description}
                      </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-end space-x-3">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="text-sm">
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row space-x-3">
                      {project.repositoryUrl && project.liveUrl ? (
                        <>
                          <Link
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex cursor-pointer flex-row text-right text-stone-700 transition duration-300"
                            onMouseEnter={() => setLinkOnHover("repository")}
                            onMouseLeave={() => setLinkOnHover("")}
                          >
                            Repositório
                            <ArrowUpRight
                              className={`ml-1 w-4 transition-all duration-150  ${
                                linkOnHover === "repository" &&
                                projectOnHover === project.name
                                  ? "pb-2"
                                  : ""
                              }`}
                            />
                          </Link>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex cursor-pointer flex-row text-right text-stone-700 transition duration-300"
                            onMouseEnter={() => setLinkOnHover("live")}
                            onMouseLeave={() => setLinkOnHover("")}
                          >
                            Site
                            <ArrowUpRight
                              className={`ml-1 w-4 transition-all duration-150  ${
                                linkOnHover === "live" &&
                                projectOnHover === project.name
                                  ? "pb-2"
                                  : ""
                              }`}
                            />
                          </Link>
                        </>
                      ) : (
                        <p>Em breve...</p>
                      )}
                    </div>
                  </div>

                  <div className="w-fit">
                    <Image
                      key={project.screenshot}
                      src={project.screenshot}
                      alt="screenshot"
                      width={200}
                      height={200}
                      className="rounded-lg border-2 border-zinc-400"
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
