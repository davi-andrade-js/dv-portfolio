import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";

export default function Info() {
  const skills = [
    {
      name: "Front-end",
      techs: [
        "TypeScript",
        "React",
        "HTML",
        "Tailwind CSS",
        "CSS",
        "Next.js",
        "Shadcn/ui",
        "Git",
        "PNPM",
      ],
    },
    {
      name: "Back-end",
      techs: ["Node.js", "Rest APIs", "PostgreSQL", "Postman"],
    },
    {
      name: "No-code",
      techs: [
        "Inglês fluente",
        "Comunicação",
        "Resolução de problemas",
        "Trabalho em equipe",
        "Raciocínio lógico",
        "Microsoft 365",
      ],
    },
  ];

  return (
    <>
      <main className="flex h-full flex-col justify-between md:flex-row">
        <div></div>

        <div className="font-poppinsRegular z-10 flex h-fit flex-col items-end justify-end space-y-4 text-base transition-all md:w-72 md:space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2 transition-all">
              <h1 className="font-poppinsMedium text-md text-end md:text-lg">
                {skill.name}
              </h1>
              <div className="flex h-fit flex-row flex-wrap justify-end gap-1 md:gap-2">
                {skill.techs.map((tech) => (
                  <div key={tech}>
                    <Badge className="badge transition-all md:text-xs">
                      <p className="transition-all">{tech}</p>
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
