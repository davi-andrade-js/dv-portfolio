import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <main className=" flex flex-row justify-between">
        <Sidebar activeSection={"info"} />

        <div className="flex flex-col w-[150px] text-[16px] font-mono font-Helvetica h-fit justify-end items-end">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>TypeScript, React, Next.js, TailwindCSS, Shadcn/ui, Git and PNPM.</p>
          <p>Postman, PostgreSQL and Rest APIs.</p>
        </div>
      </main>
    </>
  );
}
