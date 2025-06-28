type HeroProps = {
  name: string;
  title: string;
};

export default function Hero({ name, title }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm <span className="text-blue-400">{name}</span>
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-slate-300 max-w-xl">
        {title}
      </p>
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        See My Work ↓
      </a>
    </section>
  );
}
