type HeroProps = {
  name: string;
  title: string;
};

export default function Hero({ name, title }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
      <p className="text-xl md:text-2xl mb-6">{title}</p>
      <a href="mailto:youremail@example.com" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
        Contact Me
      </a>
    </section>
  );
}
