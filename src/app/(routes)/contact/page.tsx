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
      <main className="fadeIn z-10 flex h-full w-full items-end justify-end md:items-start">
        <div className="font-poppinsRegular flex h-fit flex-col items-end justify-end text-sm transition-all md:w-40 md:text-base">
          <div className="flex flex-col items-end space-y-1">
            {contactInfo.map((info) => (
              <p key={info}>{info}</p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
