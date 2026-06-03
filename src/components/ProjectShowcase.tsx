import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_IMAGES, ProjectImageItem } from "../data";
import { SafeImage } from "./SafeImage";
import DomeGallery from "./DomeGallery";
import { InteractiveGallery } from "./InteractiveGallery";
import { cn } from "../lib/utils";
import { X, Sparkles, Compass, Award, ExternalLink, SlidersHorizontal, Layers, LayoutGrid } from "lucide-react";

interface ProjectShowcaseProps {
  lightMode: "day" | "evening";
}

export default function ProjectShowcase({ lightMode }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectImageItem | null>(null);

  // Handle local filter storage
  React.useEffect(() => {
    const saved = sessionStorage.getItem("projects-active-filter");
    if (saved) {
      setActiveFilter(saved);
    }
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    sessionStorage.setItem("projects-active-filter", filter);
    
    // Smooth scroll down to outcomes grid
    const targetElement = document.getElementById("project-results-grid");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Gather all unique images from all projects in PROJECTS_IMAGES
  const domeImages = React.useMemo(() => {
    const imagesSet = new Set<string>();
    PROJECTS_IMAGES.forEach((project) => {
      if (project.src) imagesSet.add(project.src);
      if (project.gallery) {
        project.gallery.forEach((img) => imagesSet.add(img));
      }
    });
    return Array.from(imagesSet);
  }, []);

  const filteredProjects = activeFilter === "All"
    ? PROJECTS_IMAGES
    : PROJECTS_IMAGES.filter((p) => p.category === activeFilter);

  return (
    <div id="projects" className="relative w-full bg-black">
      
      {/* ==================== 1. FILTER CATEGORIES SECTION ==================== */}
      <section className="bg-black pt-20 pb-10 border-b border-white/5 relative overflow-hidden">
        {/* Immersive radial glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-electric-purple/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-3 font-mono">
              CURATED DISCOVERY
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-wide uppercase">
              PROJECT <span className="text-neon-cyan font-bold tracking-widest">SPHERES</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] tracking-wider mt-2 uppercase">
              SELECT A MATERIAL DISCIPLINE TO OUTLINE THE SCHEMATICS
            </p>
          </motion.div>

          {/* Interactive Bento Box Category selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "All",
                img: "/images/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE.jpg",
                type: "Complete portfolio",
                count: PROJECTS_IMAGES.length,
              },
              {
                name: "Residential",
                img: "/images/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I.jpg",
                type: "Living Spaces & Villas",
                count: PROJECTS_IMAGES.filter(p => p.category === "Residential").length,
              },
              {
                name: "Commercial",
                img: "/images/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41.jpg",
                type: "Bespoke Retail & Offices",
                count: PROJECTS_IMAGES.filter(p => p.category === "Commercial").length,
              },
              {
                name: "Dome Gallery",
                img: "/images/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM.jpg",
                type: "3D Experimental Canvas",
                count: 16,
              },
            ].map((cat, idx) => {
              const isActive = activeFilter === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleFilterChange(cat.name)}
                  className={cn(
                    "relative h-[220px] rounded-2xl overflow-hidden text-left group transition-all duration-700 outline-none cursor-pointer",
                    isActive
                      ? "ring-2 ring-neon-cyan ring-offset-4 ring-offset-black shadow-[0_0_50px_rgba(30,227,249,0.35)]"
                      : "ring-1 ring-white/10 opacity-70 hover:opacity-100"
                  )}
                >
                  {/* Category Image Cover */}
                  <SafeImage
                    src={cat.img}
                    alt={cat.name}
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full object-top transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  {/* Immersive overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Highlight neon-cyan tint */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000 bg-neon-cyan/10",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  />

                  {/* Inner text content card */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <span className={cn(
                      "text-[9px] font-mono tracking-[0.4em] uppercase transition-all mb-1.5",
                      isActive ? "text-neon-cyan font-bold" : "text-zinc-400"
                    )}>
                      {cat.type}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-white tracking-widest uppercase">
                      {cat.name}
                    </h3>

                    {/* Accent glowing trace bar */}
                    <div
                      className={cn(
                        "h-[2px] bg-neon-cyan mt-4 transition-all duration-700",
                        isActive ? "w-full shadow-[0_0_10px_#1ee3f9]" : "w-0 group-hover:w-full"
                      )}
                    />
                  </div>

                  {/* Top Right Floating total count badge */}
                  <div className="absolute top-4 right-4 z-20 py-1 px-2.5 bg-black/85 border border-zinc-900 rounded-lg text-[9px] font-mono text-zinc-400">
                    NOG_{cat.count}
                  </div>

                  {/* Artistic outline number background */}
                  <div className="absolute top-4 left-6 text-8xl font-display font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    0{idx + 1}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anchor identifier scroll target */}
      <div id="project-results-grid" className="scroll-mt-24" />

      {/* ==================== 2. MAIN RESULTS DISPLAY ==================== */}
      <AnimatePresence mode="wait">
        {activeFilter === "Dome Gallery" ? (
          <motion.section
            key="dome-gallery-viewport"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[650px] bg-black py-16"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
              <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-1 font-mono">
                SYSTEM: DOME_PANORAMIC_VIEWER_V2
              </span>
              <span className="text-[9px] font-mono text-zinc-500 tracking-[0.25em] uppercase">
                COORDINATES: DRAG MOUSE / SWIPE LEFT-RIGHT | RADIUS: 700px
              </span>
            </div>
            <DomeGallery
              images={domeImages}
              fit={0.45}
              minRadius={550}
              maxRadius={950}
              grayscale={false}
              overlayBlurColor="#09090b"
            />
          </motion.section>
        ) : (
          <motion.section
            key="cinematic-linear-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-20 px-6 md:px-12 py-24 bg-zinc-950/40 backdrop-blur-3xl border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto space-y-36">
              {filteredProjects.map((project, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "flex flex-col lg:flex-row gap-12 md:gap-20 items-center w-full pb-24 border-b border-zinc-900/40 last:border-b-0",
                      isEven ? "" : "lg:flex-row-reverse"
                    )}
                  >
                    {/* Visual Media Block (Left/Right) */}
                    <div className="w-full lg:w-1/2 aspect-16/10 rounded-2xl overflow-hidden border border-white/5 group relative bg-neutral-900 shadow-2xl">
                      <SafeImage
                        src={project.src}
                        alt={project.alt}
                        objectFit="cover"
                        className="w-full h-full transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                      
                      {/* Technical corner status badge */}
                      <div className="absolute top-4 left-4 z-20 py-1 px-3 bg-black/85 border border-zinc-900 rounded-md font-mono text-[9px] tracking-wider text-zinc-400">
                        {project.id.toUpperCase()}
                      </div>
                    </div>

                    {/* Description Narrative card */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="text-neon-cyan font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                          {project.category} SPECIFICATION
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-display font-light text-white tracking-widest uppercase leading-tight">
                        {project.alt}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide font-light max-w-xl">
                        {project.description}
                      </p>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="relative overflow-hidden group/show-btn py-3.5 px-8 bg-zinc-900 hover:bg-neutral-900 text-white font-mono text-[11px] uppercase tracking-[0.25em] font-semibold border border-zinc-800 hover:border-zinc-500 rounded-xs transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-xl"
                      >
                        <span>GALLERY</span>
                        <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/show-btn:text-neon-cyan group-hover/show-btn:translate-x-0.5 transition-colors" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ==================== 3. DEEP LANDSCAPE SPECS DRAWER (LIGHTBOX) ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 overflow-y-auto w-full min-h-screen"
            onClick={() => setSelectedProject(null)}
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
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-mono text-[11px] uppercase tracking-[0.25em] transition-colors cursor-pointer"
                  >
                    &larr; BACK TO PORTFOLIO
                  </button>
                  <div className="flex flex-col gap-1 items-start sm:items-end">
                    <span className="text-[10px] font-mono text-neon-cyan tracking-[0.3em] uppercase font-bold">
                      {selectedProject.category} // PORTFOLIO STUDIO
                    </span>
                    <span className="text-zinc-600 font-mono text-[9px] uppercase">PROJECT SPECS SHEETS V2</span>
                  </div>
                </div>

                {/* Hero information block */}
                <div className="space-y-4 max-w-4xl">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-light text-white tracking-widest uppercase leading-none">
                    {selectedProject.alt}
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-3xl pt-2">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Main 3x3 Large Instagram style Reel Grid */}
                <div className="w-full bg-zinc-950/20 border border-zinc-900/60 p-4 sm:p-8 rounded-2xl">
                  <InteractiveGallery
                    images={selectedProject.gallery || [selectedProject.src]}
                    alt={selectedProject.alt}
                  />
                </div>
              </div>

              {/* Lower bottom metadata signature lines */}
              <div className="max-w-6xl mx-auto w-full border-t border-zinc-900 pt-16 mt-20 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 gap-4">
                <span>// DETAILED LOOKBOOK REGISTERED BY ARCHITECTS AND ASSOCIATES</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-neon-cyan tracking-widest cursor-pointer uppercase font-semibold text-xs animate-pulse"
                >
                  DISMISS VIEW &rarr;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
