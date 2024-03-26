import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <main className=" flex flex-row justify-between">
        <Sidebar activeSection={"info"} />

        <div className="font-poppinsRegular z-10 flex h-fit w-44 flex-col items-end justify-end space-y-2 text-base">
          <h1 className="font-covesBold text-end text-xl">
            Principais tecnologias
          </h1>
          <p className="text-end">
            TypeScript, React, Next.js, TailwindCSS, Shadcn/ui, Git e PNPM.
          </p>
          <p className="text-end">
            Noções básicas de BackEnd com Postman, PostgreSQL e Rest APIs.
          </p>
        </div>
      </main>
    </>
  );
}
