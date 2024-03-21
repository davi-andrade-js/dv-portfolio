import ProjectsList from "../components/ProjectsList";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="noise"></div>

      <section className="border border-gray-500 br-[12px] h-[91vh] p-5 m-8 ">
        <header className="flex flex-row justify-between w-full ">
          <div className="z-10 flex flex-col font-mono text-sm">
            <p className=" left-0 top-0 lg:static lg:w-auto text-2xl">DV</p>
            {/* <p className=" left-0 top-0  lg:static lg:w-auto text-xl"></p> */}
          </div>
          <div className="z-10 w-30">
            <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <main className="flex flex-row justify-between mt-20">
          <Sidebar activeSection={"projects"} />

          <ProjectsList />
        </main>
      </section>
    </>
  );
}
