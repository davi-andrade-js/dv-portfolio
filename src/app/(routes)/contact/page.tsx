"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [onHover, setOnHover] = useState("");

  const redirectInfo = [
    {
      name: "GitHub",
      url: "https://github.com/davi-andrade-js",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andrade-davi/",
    },
  ];

  const contactInfo = ["(75) 99857-6430", "dv.andrade04@gmail.com"];

  return (
    <>
      <main className="z-10 flex h-full w-full flex-col justify-between md:flex-row">
        <Sidebar activeSection={"contact"} />

        <div className="font-poppinsRegular flex h-fit flex-col items-end justify-end space-y-4 text-sm transition-all md:w-40 md:text-base">
          <div className="flex flex-col items-end">
            {redirectInfo.map((info) => (
              <div key={info.name}>
                <Link
                  key={info.name}
                  href={info.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                  onMouseEnter={() => setOnHover(info.name)}
                  onMouseLeave={() => setOnHover("")}
                >
                  {info.name}
                  <ArrowUpRight
                    className={`ml-1 h-fit w-3 transition-all md:h-auto md:w-4  ${
                      onHover === info.name ? "pb-2" : ""
                    }`}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end">
            {contactInfo.map((info) => (
              <p key={info}>{info}</p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
