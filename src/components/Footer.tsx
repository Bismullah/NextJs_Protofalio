export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6 text-center text-sm">
      <div className="space-x-4">
        <a href="#hero" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Bismullah Wafadar. All rights reserved.</p>
    </footer>
  );
}
