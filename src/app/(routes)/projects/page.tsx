"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ProjectsLink from "../../../components/ProjectsLink";
import { Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { projects } from "../../../components/projects";

export default function ProjectsList() {
  const [projectOnHover, setProjectOnHover] = React.useState("");

  return (
    <>
      <ScrollArea className="scroll fadeIn font-poppinsRegular mt-8 flex h-full items-end md:mt-0 md:w-[31rem] md:pr-4 md:pt-0 lg:w-[36rem]">
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
              className="card md:card-none md:hover:card flex h-fit w-full cursor-default flex-col items-end space-x-5 space-y-3 rounded-xl p-4 transition-all md:w-[24rem] md:flex-row md:items-start md:space-y-0 md:p-2 lg:w-full"
              onMouseEnter={() => setProjectOnHover(project.name)}
              onMouseLeave={() => setProjectOnHover("")}
            >
              <div className=" flex w-full flex-col items-end justify-between space-y-2 md:w-[90%] md:space-y-4">
                <div className="flex w-full flex-col items-end transition-all">
                  <header className="font-poppinsMedium flex w-full flex-row justify-between">
                    <div className="flex flex-row items-center space-x-3">
                      {project.pinned ? (
                        <Star
                          className="h-4 w-4 md:h-5 md:w-5"
                          color="var(--title-color)"
                          fill="var(--title-color)"
                        />
                      ) : (
                        <></>
                      )}
                      <div className=" text-base">{project.year}</div>
                    </div>

                    <div className="flex text-end text-lg">{project.name}</div>
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

              <div className="md:min-w-28 lg:min-w-32">
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
    </>
  );
}
