/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_IMAGES, ProjectImageItem } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import { InteractiveGallery } from "./components/InteractiveGallery";
import InquiryModal from "./components/InquiryModal";
import Footer from "./components/Footer";

export default function App() {
  const [lightMode, setLightMode] = useState<"day" | "evening">("evening");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedHeroProject, setSelectedHeroProject] = useState<ProjectImageItem | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  // Initial loader simulation to render neat blueprint drawings
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Update active section on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const projectsEl = document.getElementById("projects");
      const scrollPosition = window.scrollY + 180;
      
      if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans antialiased text-white select-none no-scrollbar">
      
      {/* 1. Custom High-End Architecture Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="dsa-app-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505] z-[100] flex flex-col justify-center items-center p-6"
          >
            {/* Geometric loading blueprint */}
            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
              {/* Outer drafting box */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                className="absolute inset-0 border border-white/20"
                style={{ originX: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Spinning compass visual needle line */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-14 h-[1px] bg-neon-cyan absolute origin-left left-1/2"
              />

              {/* Central high-end monolithic box drawing */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center space-y-1 z-10"
              >
                <div className="text-white font-display text-3xl tracking-[0.25em] font-medium leading-none">
                  PORTFOLIO
                </div>
                <div className="text-[6.5px] text-zinc-400 tracking-[0.5em] font-mono whitespace-nowrap uppercase">
                  ARCHITECTURAL &amp; INTERIOR DESIGN
                </div>
              </motion.div>
            </div>

            {/* Architectural metadata logs */}
            <div className="space-y-1.5 text-center font-mono text-[9px] text-zinc-500 tracking-[0.15em] max-w-xs uppercase">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-neon-cyan font-semibold"
              >
                // COMPILING PLOT SCHEMATICS //
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                RENDER SYSTEM: ACTIVE (v3.0.1)
              </motion.div>
              <div className="w-32 h-[1px] bg-zinc-900 mx-auto my-2" />
              <div className="text-[7.5px] text-zinc-600">
                MILAN | LA | TOKYO LUXURY
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Glassmorphic Sticky Header */}
      <Header
        lightMode={lightMode}
        setLightMode={setLightMode}
        onOpenInquiry={() => setInquiryOpen(true)}
        activeSection={activeSection}
      />

      {/* 3. Hero Interactive Showcase Slider */}
      <Hero
        projects={PROJECTS_IMAGES}
        lightMode={lightMode}
        onSelectProject={(project) => setSelectedHeroProject(project)}
      />

      {/* 4. Curated Projects Showcase (Loads directly as the main page content) */}
      <ProjectShowcase lightMode={lightMode} />

      {/* 5. Floating spec sheets details modal drawer for Hero-selected projects */}
      <AnimatePresence>
        {selectedHeroProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto w-full min-h-screen backdrop-blur-md"
            onClick={() => setSelectedHeroProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-h-screen bg-black text-white px-6 py-12 md:py-24 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-6xl mx-auto w-full space-y-16">
                {/* Back button and title */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-900 pb-8 gap-6">
                  <button
                    onClick={() => setSelectedHeroProject(null)}
                    className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-mono text-[11px] uppercase tracking-[0.25em] transition-colors cursor-pointer"
                  >
                    &larr; BACK TO PORTFOLIO
                  </button>
                  <div className="flex flex-col gap-1 items-start sm:items-end">
                    <span className="text-[10px] font-mono text-neon-cyan tracking-[0.3em] uppercase font-bold">
                      {selectedHeroProject.category} // HERO INTERACTIVE
                    </span>
                    <span className="text-zinc-600 font-mono text-[9px] uppercase">PROJECT SPECS SHEETS V2</span>
                  </div>
                </div>

                {/* Hero information block */}
                <div className="space-y-4 max-w-4xl">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-light text-white tracking-widest uppercase leading-none">
                    {selectedHeroProject.alt}
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-3xl pt-2">
                    {selectedHeroProject.description}
                  </p>
                </div>

                {/* Main 3x3 Large Instagram style Reel Grid */}
                <div className="w-full bg-zinc-950/20 border border-zinc-900/60 p-4 sm:p-8 rounded-2xl">
                  <InteractiveGallery
                    images={selectedHeroProject.gallery || [selectedHeroProject.src]}
                    alt={selectedHeroProject.alt}
                  />
                </div>
              </div>

              {/* Lower bottom metadata signature lines */}
              <div className="max-w-6xl mx-auto w-full border-t border-zinc-900 pt-16 mt-20 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 gap-4">
                <span>// DETAILED LOOKBOOK REGISTERED BY ARCHITECTS AND ASSOCIATES</span>
                <button
                  onClick={() => setSelectedHeroProject(null)}
                  className="text-white hover:text-neon-cyan tracking-widest cursor-pointer uppercase font-semibold text-xs animate-pulse"
                >
                  DISMISS VIEW &rarr;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Patron Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

      {/* 7. Boutique Offices Footer */}
      <Footer />

      {/* Interactive Global Renders Ambient Background Overlay */}
      <div className={`fixed inset-0 -z-50 pointer-events-none transition-all duration-1000 ${
        lightMode === "evening"
          ? "bg-[radial-gradient(circle_at_80%_20%,rgba(30,227,249,0.06),transparent_50%)]"
          : "bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]"
      }`} />

    </div>
  );
}
