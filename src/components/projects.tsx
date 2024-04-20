interface Project {
  name: string;
  year: string;
  pinned: boolean;
  description: string;
  screenshot: string;
  alt: string;
  repositoryUrl: string;
  liveUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: "Davi Andrade",
    year: "2024",
    pinned: true,
    description: "Portfólio pessoal.",
    screenshot: "/images/portfolio.webp",
    alt: "Página inicial do portfólio com navbar, texto de apresentação e links de redirecionamento.",
    repositoryUrl: "https://github.com/davi-andrade-js/dv-portfolio",
    liveUrl: "",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
  },
  {
    name: "Weather App",
    year: "2024",
    pinned: false,
    description: "Aplicação de clima e tempo com a API OpenWeather.",
    screenshot: "/images/weather.webp",
    alt: "Landing page com clima e tempo atual e previsão para os próximos dias.",
    repositoryUrl: "https://github.com/davi-andrade-js/weather-app",
    liveUrl: "https://weather-app-nu-roan.vercel.app/",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "OpenWeatherAPI",
    ],
  },
  {
    name: "Thinker AI",
    year: "2024",
    pinned: false,
    description:
      "Ferramenta de IA com geração de textos, imagens, vídeos, áudio e código.",
    screenshot: "/images/thinker.webp",
    alt: "Dashboard com navbar e opções de geração.",
    repositoryUrl: "https://github.com/davi-andrade-js/Thinker-AI",
    liveUrl: "https://thinker-pmm0suqah-davis-projects-820de78a.vercel.app/",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "OpenAI API",
      "Replicate API",
    ],
  },
  {
    name: "Player de Música Retrô",
    year: "2023",
    pinned: true,
    description: "Player de música inspirado no visual do Windows 95.",
    screenshot: "/images/music-player.webp",
    alt: "Tela inicial com o modal do player de música aberto.",
    repositoryUrl: "https://github.com/davi-andrade-js/Retro-Music-Player",
    liveUrl: "https://davi-andrade-js.github.io/Retro-Music-Player/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Calc.js",
    year: "2023",
    pinned: false,
    description: "Simples calculadora.",
    screenshot: "/images/calc.webp",
    alt: "Página da calculadora.",
    repositoryUrl: "https://github.com/davi-andrade-js/Calc.js",
    liveUrl: "https://davi-andrade-js.github.io/Calc.js/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];
