const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS",
  "Git", "GitHub", "Vercel",
  "Arduino", "WordPress"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-slate-300">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800 py-3 px-4 rounded-lg hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
