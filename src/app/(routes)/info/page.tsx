import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <header className="flex flex-row justify-between w-full h-24 font-covesBold">
        <div className="z-10 flex flex-col text-sm">
          <p className=" left-0 top-0 lg:static lg:w-auto text-4xl">DV</p>
          {/* <p className=" left-0 top-0  lg:static lg:w-auto text-xl"></p> */}
        </div>
        <div className="z-10 w-30">
          <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
        </div>
      </header>

      <main className="mt-11 flex flex-row justify-between">
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
