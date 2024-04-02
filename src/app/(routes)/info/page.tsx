import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";

// TODO: refactor this component

export default function Info() {
  const frontTechs = [
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    " Shadcn/ui",
    "Git",
    "PNPM",
  ];

  const backTechs = ["Postman", "PostgreSQL", "Node.js", "Rest APIs"];

  const noCodeSkills = [
    "Inglês fluente",
    "Comunicação",
    "Resolução de problemas",
    "Trabalho em equipe",
    "Raciocínio lógico",
    "Microsoft 365",
  ];

  return (
    <>
      <main className=" flex h-full flex-col justify-between md:flex-row">
        <Sidebar activeSection={"info"} />

        <div className="font-poppinsRegular z-10 flex h-fit flex-col items-end justify-end space-y-4 text-base transition-all duration-150 md:w-72 md:space-y-6">
          <div className="space-y-2 transition-all duration-150">
            <h1 className="font-covesBold text-end text-lg md:text-xl">
              Principais tecnologias front-end
            </h1>
            <div className="flex h-fit flex-row flex-wrap justify-end gap-1 md:gap-2">
              {frontTechs.map((tech) => (
                <div key={tech}>
                  <Badge className="badge md:text-xs">{tech}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 transition-all duration-150">
            <h1 className="font-covesBold text-end text-lg md:text-xl">
              Noções básicas de back-end
            </h1>
            <div className="flex h-fit flex-row flex-wrap justify-end gap-1 md:gap-2">
              {backTechs.map((tech) => (
                <div key={tech}>
                  <Badge className="badge md:text-xs">{tech}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 transition-all duration-150">
            <h1 className="font-covesBold text-end text-lg md:text-xl">
              Habilidades no-code
            </h1>
            <div className="flex h-fit flex-row flex-wrap justify-end gap-1 md:gap-2">
              {noCodeSkills.map((skill) => (
                <div key={skill}>
                  <Badge className="badge md:text-xs">{skill}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
