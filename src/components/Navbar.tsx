"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className={`fixed w-full z-50 transition duration-300 ${scrolled ? "bg-slate-900 shadow" : "bg-transparent"}`}>
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 text-white">
        <div className="text-xl font-bold text-blue-400">Bismullah</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
