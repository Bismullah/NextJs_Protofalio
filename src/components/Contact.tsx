export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>
        <p className="text-slate-300 mb-6">
          Feel free to reach out if you have a project, opportunity, or just want to connect.
        </p>
        <a
          href="mailto:Bismullahwafadar5@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium text-white transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
