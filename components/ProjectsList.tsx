"use client";

export default function ProjectsList() {
  const projects = [
    {
      name: "Player de Música Retrô",
      description: "Um player de música inspirado no visual do Windows 95.",
      screenshot: "",
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      name: "Thinker AI",
      description: "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
      screenshot: "",
      repositoryUrl: "",
      liveUrl: "",
    },
  ];

  return (
    <div className="grid justify-end col-start-4">
      <article className="z-10 text-xl w-fit gap-2">
        {projects.map((project) => (
          <p key={project.name} className="cursor-pointer hover:font-bold transition-transform">
            {project.name}
          </p>
        ))}
      </article>
    </div>
  );
}
