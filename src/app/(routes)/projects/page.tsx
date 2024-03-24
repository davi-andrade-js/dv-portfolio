import ProjectsList from "../../components/ProjectsList";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <header className="flex flex-row justify-between w-full h-24 font-covesBold">
          <div className="z-10 flex flex-col text-sm">
            <p className=" left-0 top-0 lg:static lg:w-auto text-4xl">DV</p>
            {/* <p className=" left-0 top-0  lg:static lg:w-auto text-xl"></p> */}
          </div>
          <div className="z-10 w-30">
            <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <main className="mt-11">
          <Sidebar activeSection={"projects"} />
        </main>
        <ProjectsList />
      </div>
    </>
  );
}
