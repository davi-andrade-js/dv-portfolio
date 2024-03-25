import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full font-covesLight mb-8">
      <div className="z-10 flex flex-col h-fit">
        <p className=" left-0 top-0 text-3xl md:text-6xl lg:text-6xl">Davi Andrade</p>
        <p className=" left-0 top-0 text-lg md:text-2xl lg:text-2xl">Programador FrontEnd</p>
      </div>

      <div className="z-10">
        <Image
          className="w-9 md:w-12 lg:w-12"
          width={50}
          height={50}
          alt="Theme"
          src={"/dark.png"}
        />
      </div>
    </header>
  );
}
