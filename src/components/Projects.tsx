type Project = {
  title: string;
  description: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, Tailwind CSS, and TypeScript. Fully responsive and deployed on Vercel.",
    github: "https://github.com/Bismullah/NextJs_Protofalio",
    live: "https://next-js-protofalio.vercel.app",
  },
  {
    title: "IoT LED Controller (Demo)",
    description: "A conceptual project for controlling an LED with a web UI using React and Arduino. Simulated in Tinkercad.",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-blue-500/50 transition">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
