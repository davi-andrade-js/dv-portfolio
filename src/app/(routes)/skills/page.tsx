import DownloadResumeBtn from "@/components/DownloadResumeBtn";
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
      techs: ["Inglês fluente", "Microsoft 365", "Google Workspace", "GitHub"],
    },
  ];

  return (
    <>
      <div className="fadeIn flex h-full flex-col justify-end md:flex-row md:justify-between">
        <div className="font-poppinsRegular z-10 flex h-fit flex-col items-end justify-end space-y-4 text-base md:w-72 md:space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2 transition-all">
              <h3 className="font-poppinsMedium cursor-default text-end text-lg transition-all">
                {skill.name}
              </h3>

              <div className="flex h-fit flex-row flex-wrap justify-end gap-1 md:gap-2">
                {skill.techs.map((tech) => (
                  <div key={tech}>
                    <Badge className="badge text-xs transition-all">
                      <p className="transition-all">{tech}</p>
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <DownloadResumeBtn />
        </div>
      </div>
    </>
  );
}
