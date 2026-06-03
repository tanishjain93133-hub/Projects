import { useState, useEffect } from "react";
import { Sun, Moon, ArrowRight } from "lucide-react";

interface HeaderProps {
  lightMode: "day" | "evening";
  setLightMode: (mode: "day" | "evening") => void;
  onOpenInquiry: () => void;
  activeSection: string;
}

export default function Header({
  lightMode,
  setLightMode,
  onOpenInquiry,
  activeSection,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Projects", target: "projects" },
  ];

  return (
    <header
      id="dsa-main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav id="dsa-desktop-navigation" className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              onClick={() => scrollToSection(item.target)}
              className={`text-xs uppercase tracking-[0.2em] font-mono cursor-pointer transition-all duration-300 relative py-1 ${
                activeSection === item.target
                  ? "text-blue-400 font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 animate-pulse" />
              )}
            </button>
          ))}

          {/* Interactive LIGHTS mode switcher as requested in navigation */}
          <div className="relative group/lights">
            <button
              id="nav-link-lights-toggle"
              onClick={() => setLightMode(lightMode === "day" ? "evening" : "day")}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono py-1 px-3 rounded-full border border-zinc-800 hover:border-zinc-500 bg-neutral-900/60 transition-all duration-300 bg-linear-to-r hover:from-neutral-900 hover:to-zinc-950 text-white cursor-pointer group-hover/lights:text-blue-300"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                lightMode === "day" ? "bg-amber-400 animate-pulse" : "bg-indigo-400"
              }`} />
              Lights: <span className="font-semibold text-blue-400">{lightMode === "day" ? "Day" : "Evening"}</span>
            </button>
            
            {/* Elegant sub-title indicator floating explaining the interactive day/night render changes */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-2 rounded-lg bg-zinc-950/95 border border-zinc-800 text-[9px] text-zinc-400 leading-normal opacity-0 group-hover/lights:opacity-100 transition-opacity duration-300 pointer-events-none text-center backdrop-blur-xs font-mono shadow-xl">
              Toggle to watch project renders shift between sharp crisp daylight & premium ambient dusk.
            </div>
          </div>
        </nav>

        {/* Right Side Controls (Day/Evening Compact Panel + Inquiry Button) */}
        <div id="dsa-header-actions" className="flex items-center gap-4">
          {/* Quick Mobile day/night mode switcher */}
          <button
            id="mobile-lights-switcher"
            onClick={() => setLightMode(lightMode === "day" ? "evening" : "day")}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900/40 border border-zinc-800 "
            title="Toggle Site Illumination Mode"
          >
            {lightMode === "day" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <button
            id="inquiry-header-btn"
            onClick={onOpenInquiry}
            className="relative overflow-hidden px-4 md:px-5 py-2.5 rounded-xs bg-white text-black font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold hover:bg-zinc-100 cursor-pointer shadow-lg hover:shadow-white/5 transition-all duration-300 group flex items-center gap-1.5"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
