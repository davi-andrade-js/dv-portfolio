"use client";

import { Moon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function Header() {
  return (
    <header className="font-covesLight mb-8 flex w-full flex-row justify-between">
      <div className="z-10 flex h-fit cursor-default flex-col">
        <p className=" text-3xl md:text-6xl lg:text-6xl">Davi Andrade</p>
        <p className=" text-md md:text-2xl lg:text-2xl">
          Desenvolvedor FrontEnd
        </p>
      </div>

      <div className="z-10">
        <Moon
          className="w-fit opacity-40"
          onClick={() => {
            toast(
              `🌚 Esta é a versão beta. Troca de tema ainda não foi implementada.`,
            );
          }}
        />
      </div>
    </header>
  );
}
