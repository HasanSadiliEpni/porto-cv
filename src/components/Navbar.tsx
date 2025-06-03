'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 px-4">
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}