export default function AboutMe() {
  return (
    <section id="about" className="bg-slate-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          My name is <span className="text-white font-semibold">Bismullah Wafadar</span>, a passionate frontend developer from Afghanistan. 
          I specialize in building responsive, fast, and accessible web applications using 
          <span className="text-blue-300 font-medium"> React, Next.js, TypeScript, and Tailwind CSS</span>. 
          I enjoy learning and teaching technology, and I’m currently expanding my skills in mobile app development and IoT (Arduino).
        </p>
        <p className="text-md md:text-lg text-slate-400 mt-6">
          My goal is to build impactful digital products and share knowledge with others who want to grow in tech — especially in underrepresented communities like mine.
        </p>
      </div>
    </section>
  );
}
