"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Resume() {
  const [onHover, setOnHover] = useState(false);

  return (
    <Link
      className="flex w-fit flex-row transition-all"
      href="/downloads/Currículo Davi Andrade.pdf"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <p>Currículo</p>
      <ArrowUpRight
        className={`ml-1 w-3 transition-all md:w-4 ${onHover && "pb-2"}`}
      />
    </Link>
  );
}
