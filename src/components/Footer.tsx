import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
        <div>
          &copy; {new Date().getFullYear()} DSA ARCHITECTS &amp; INTERIORS. ALL REPRODUCTIONS AND STRUCTURAL BLUEPRINTS RESERVED.
        </div>
        <div className="flex gap-4">
          <a href="#projects" className="hover:text-white transition-colors">PROJECT DIRECTORY</a>
          <span>/</span>
          <span className="text-zinc-600 select-none">MILAN | NYC | SYDNEY</span>
        </div>
      </div>
    </footer>
  );
}

