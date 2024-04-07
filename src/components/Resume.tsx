"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Resume() {
  const [onHover, setOnHover] = useState(false);

  return (
    <Link
      className="flex h-fit w-fit flex-row transition-all"
      href="/downloads/Currículo Davi Andrade.pdf"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <p className="text-sm md:text-base">Currículo</p>
      <ArrowUpRight
        className={`ml-1 h-fit w-3 transition-all md:h-auto md:w-4 ${onHover && "pb-2"}`}
      />
    </Link>
  );
}
