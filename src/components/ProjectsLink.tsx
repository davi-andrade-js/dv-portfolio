"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function ProjectLink({
  repositoryUrl,
  liveUrl,
  projectOnHover,
}: {
  repositoryUrl: string;
  liveUrl: string;
  projectOnHover: string;
}) {
  const [linkOnHover, setLinkOnHover] = React.useState("");

  return (
    <>
      {!repositoryUrl && !liveUrl ? <p>Em breve...</p> : null}
      <div className="flex flex-row space-x-3 ">
        {repositoryUrl ? (
          <>
            <Link
              className="flex cursor-pointer flex-row items-center text-right text-base"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setLinkOnHover("repository")}
              onMouseLeave={() => setLinkOnHover("")}
            >
              <p className="transition-all">Repositório</p>
              <ArrowUpRight
                className={`ml-1 h-fit w-3 transition-all md:h-auto md:w-4  ${
                  linkOnHover === "repository" && projectOnHover
                    ? "md:pb-2"
                    : ""
                }`}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {liveUrl ? (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer flex-row items-center text-right text-base"
            onMouseEnter={() => setLinkOnHover("live")}
            onMouseLeave={() => setLinkOnHover("")}
          >
            <p className="transition-all">Site</p>
            <ArrowUpRight
              className={`ml-1 h-fit w-3 transition-all md:h-auto md:w-4 ${
                linkOnHover === "live" && projectOnHover ? "md:pb-2" : ""
              }`}
            />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
