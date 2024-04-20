"use client";

import Image from "next/image";
import React from "react";
import ProjectsLink from "../../../components/ProjectsLink";
import { Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { projects } from "../../../components/projects";

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");

  projects.sort(function (a, b) {
    let x = a.pinned;
    let y = b.pinned;

    if (x === true) {
      return -1;
    }
    if (x === false) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <div className="fadeIn font-poppinsRegular mt-8 flex h-full w-full flex-row items-end justify-end overflow-hidden md:mt-0 md:pt-0 lg:w-3/5">
        <ScrollArea className="scroll h-full md:w-3/4 md:pr-4">
          {projects.map((project) => (
            <div className="flex flex-col" key={project.name}>
              {projects.indexOf(project) !== 0 ? (
                <div
                  key={project.name}
                  className={
                    "badge m-2 w-full border-transparent md:my-5 md:border"
                  }
                ></div>
              ) : (
                <></>
              )}
              <div
                className="card md:card-none md:hover:card flex h-fit w-full cursor-default flex-row space-x-5 rounded-xl p-4 transition-all md:p-2"
                onMouseEnter={() => setProjectOnHover(project.name)}
                onMouseLeave={() => setProjectOnHover("")}
              >
                <div className=" flex w-full flex-col items-end justify-between space-y-2  md:w-[90%] md:space-y-4">
                  <div className="flex w-full flex-col items-end transition-all">
                    <header className="font-poppinsMedium flex w-full flex-row justify-between">
                      <div className="flex flex-row items-center space-x-3 md:space-x-5">
                        {project.pinned ? (
                          <Star
                            className="h-4 w-4 md:h-5 md:w-5"
                            color="var(--title-color)"
                            fill="var(--title-color)"
                          />
                        ) : (
                          <></>
                        )}
                        <p className=" text-base">{project.year}</p>
                      </div>

                      <div className="flex text-end text-lg">
                        {project.name}
                      </div>
                    </header>

                    <div className="text-secondary text-right text-base transition-all">
                      <p className="w-72 transition-all md:w-96">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row flex-wrap justify-end gap-1 md:gap-2">
                    {project.technologies.map((tech) => (
                      <div key={tech}>
                        <Badge className="badge text-xs transition-all">
                          <p className="transition-all">{tech}</p>
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <ProjectsLink
                    repositoryUrl={project.repositoryUrl}
                    liveUrl={project.liveUrl}
                    projectOnHover={projectOnHover}
                  />
                </div>

                <div className="hidden w-fit md:block">
                  <Image
                    key={project.screenshot}
                    src={project.screenshot}
                    alt="Preview do projeto"
                    loading="lazy"
                    width={200}
                    height={120}
                    className="rounded-lg border-2 border-zinc-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
