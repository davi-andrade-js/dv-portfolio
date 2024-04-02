"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

// TODO: refactor this component and create a link component

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");
  const [linkOnHover, setLinkOnHover] = React.useState("");

  const projects = [
    {
      name: "Davi Andrade",
      description: "Portfólio pessoal.",
      screenshot: "/images/portfolio.png",
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
      description:
        "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "/images/thinker.png",
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
      description: "Player de música inspirado no visual do Windows 95.",
      screenshot: "/images/music-player.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
      liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
      technologies: ["JavaScript Vanilla", "HTML", "CSS"],
      year: "2023",
    },
    {
      name: "Calc.js",
      description: "Simples calculadora.",
      screenshot: "/images/calc.png",
      repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
      liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
      technologies: ["JavaScript Vanilla", "HTML", "CSS"],
      year: "2023",
    },
    {
      name: "Weather App",
      description: "Aplicação de clima e tempo com a API OpenWeather.",
      screenshot: "/images/weather.png",
      repositoryUrl: "",
      liveUrl: "",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "OpenWeatherAPI",
      ],
      year: "2024",
    },
  ];

  return (
    <>
      <div className="font-poppinsRegular flex h-full w-full flex-row pt-3 md:w-3/5 md:pt-0 lg:items-end lg:justify-end ">
        <ScrollArea className="h-full md:w-3/4 md:pr-4">
          <div className="flex flex-col space-y-4 md:space-y-5">
            {projects.map((project) => (
              <>
                {projects.indexOf(project) !== 0 ? (
                  <div
                    key={project.name}
                    className={
                      "w-full border border-transparent border-t-stone-900"
                    }
                  ></div>
                ) : (
                  <></>
                )}

                <div
                  className={`hover:card flex h-fit w-full cursor-default flex-row space-x-5 rounded-xl transition-all duration-150 md:p-2 ${projectOnHover === project.name ? "card" : ""}`}
                  onMouseEnter={() => setProjectOnHover(project.name)}
                  onMouseLeave={() => setProjectOnHover("")}
                >
                  <div className="flex w-full flex-col items-end justify-between space-y-3 transition-all duration-150 md:w-[90%] md:space-y-5">
                    <div className="flex w-full flex-col items-end">
                      <header className="font-poppinsRegular flex w-full flex-row justify-between">
                        <div className="text-sm md:text-base">
                          {project.year}
                        </div>
                        <div className="font-covesBold flex md:text-xl">
                          {project.name}
                        </div>
                      </header>

                      <div className="secondary text-right text-xs md:text-base">
                        {project.description}
                      </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-end gap-2">
                      {project.technologies.map((tech) => (
                        <div key={tech}>
                          <Badge className="badge md:text-xs">{tech}</Badge>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row space-x-3 ">
                      {project.repositoryUrl ? (
                        <>
                          <Link
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex cursor-pointer flex-row text-right text-xs  md:text-base"
                            onMouseEnter={() => setLinkOnHover("repository")}
                            onMouseLeave={() => setLinkOnHover("")}
                          >
                            Repositório
                            <ArrowUpRight
                              className={`ml-1 h-fit w-3 transition-all duration-150 md:h-auto md:w-4  ${
                                linkOnHover === "repository" &&
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
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex cursor-pointer flex-row text-right text-xs md:text-base"
                          onMouseEnter={() => setLinkOnHover("live")}
                          onMouseLeave={() => setLinkOnHover("")}
                        >
                          Website
                          <ArrowUpRight
                            className={`ml-1 h-fit w-3 transition-all duration-150 md:h-auto md:w-4 ${
                              linkOnHover === "live" &&
                              projectOnHover === project.name
                                ? "pb-2"
                                : ""
                            }`}
                          />
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="hidden w-fit md:block">
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
