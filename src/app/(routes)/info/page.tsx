import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <main className=" flex flex-row justify-between">
        <Sidebar activeSection={"info"} />

        <div className="flex flex-col w-40 text-base font-poppinsRegular h-fit justify-end items-end space-y-2">
          <p>Experiência com TypeScript, React, Next.js, TailwindCSS, Shadcn/ui, Git e PNPM.</p>
          <p>Noções básicas de BackEnd com Postman, PostgreSQL e Rest APIs.</p>
        </div>
      </main>
    </>
  );
}
