import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, CornerDownRight } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    aesthetic: "monolithic-concrete",
    budget: "$2.5M - $5.0M",
    objectives: "",
    nda: false,
  });

  const aesthetics = [
    { value: "monolithic-concrete", label: "Monolithic Cantilevered Concrete" },
    { value: "minimalist-glass", label: "Glass & Metallic Columns" },
    { value: "brutalist-teak", label: "Brutalist Stone & Natural Aged Wood" },
    { value: "onyx-interior", label: "Obsidian Marble & Metal Penthouses" },
  ];

  const budgets = [
    { value: "$1.5M - $2.5M", label: "$1.5M - $2.5M USD" },
    { value: "$2.5M - $5.0M", label: "$2.5M - $5.0M USD" },
    { value: "$5.0M - $10.0M", label: "$5.0M - $10.0M USD" },
    { value: "$10.0M+", label: "$10.0M+ USD Ultra Luxe" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate sending high-end architectural dossier request
    setSuccess(true);
    setTimeout(() => {
      // Complete state callback
    }, 2000);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      aesthetic: "monolithic-concrete",
      budget: "$2.5M - $5.0M",
      objectives: "",
      nda: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="inquiry-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
        >
          <motion.div
            id="inquiry-modal-container"
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-2xl bg-white border border-zinc-200 rounded-xs p-6 md:p-10 relative shadow-2xl my-8 text-zinc-900"
          >
            {/* Close trigger button */}
            <button
              id="close-inquiry-modal-btn"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 hover:border-zinc-200 border border-transparent rounded-xs transition-colors cursor-pointer"
              aria-label="Close Inquiry Drawer"
            >
              <X className="w-5 h-5" />
            </button>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Modal Title */}
                <div>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-blue-600 block mb-1 uppercase">
                    STUDIO ARCHITECTURAL INTAKE v2.0
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-light text-zinc-900 uppercase tracking-tight">
                    COMMISSION A SIGNATURE SPACE
                  </h3>
                  <p className="text-zinc-650 text-xs tracking-wide leading-relaxed font-sans max-w-md mt-1 font-light">
                    Initiate a direct briefing session. Our lead architects will prepare a preliminary topographic and architectural schematic proposal.
                  </p>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5ClassName">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      PATRON NAME *
                    </label>
                    <input
                      required
                      type="text"
                      id="inquiry-input-name"
                      placeholder="e.g. Lord Alexander Vane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-xs focus:border-blue-500 focus:outline-none rounded-xs transition-colors placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      COMMUNICATION CARD (EMAIL) *
                    </label>
                    <input
                      required
                      type="email"
                      id="inquiry-input-email"
                      placeholder="e.g. alexander@vane-estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-xs focus:border-blue-500 focus:outline-none rounded-xs transition-colors placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      SECURE TELEPHONE DIRECTORY
                    </label>
                    <input
                      type="tel"
                      id="inquiry-input-phone"
                      placeholder="+44 7911 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-xs focus:border-blue-500 focus:outline-none rounded-xs transition-colors placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      PROSPECT PROPERTY GEOGRAPHIC CODE
                    </label>
                    <input
                      type="text"
                      id="inquiry-input-location"
                      placeholder="e.g. Ramatuelle, French Riviera"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-xs focus:border-blue-500 focus:outline-none rounded-xs transition-colors placeholder-zinc-400"
                    />
                  </div>
                </div>

                {/* Aesthetic Selection */}
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1.5">
                    PREFERRED DESIGN SPECTRUM
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {aesthetics.map((aes) => (
                      <button
                        key={aes.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, aesthetic: aes.value })}
                        className={`p-3 text-left font-mono text-[10px] tracking-wider rounded-xs border transition-all cursor-pointer flex items-center justify-between uppercase ${
                          formData.aesthetic === aes.value
                            ? "bg-blue-50 border-blue-500 text-blue-600 font-semibold"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                        }`}
                      >
                        <span>{aes.label}</span>
                        {formData.aesthetic === aes.value && (
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget parameters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      ESTIMATED CAPITAL ALLOCATION (USD)
                    </label>
                    <select
                      id="inquiry-select-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-mono text-xs focus:border-blue-500 focus:outline-none rounded-xs select-none uppercase tracking-wide cursor-pointer"
                    >
                      {budgets.map((b) => (
                        <option key={b.value} value={b.value} className="bg-white text-zinc-900">
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end pb-3">
                    <label className="flex items-center gap-3 text-zinc-550 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="inquiry-input-nda"
                        checked={formData.nda}
                        onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                        className="w-4 h-4 rounded-xs border-zinc-300 text-blue-600 bg-zinc-50 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-550 hover:text-zinc-900 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 inline" /> Require strict legal NDA (Confidentiality)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Brief statement */}
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    PRIMARY ARCHITECTURAL OBJECTIVES
                  </label>
                  <textarea
                    id="inquiry-input-objectives"
                    placeholder="Describe environmental parameters, topography variables, bespoke needs (e.g. floating heliport, subterranean gallery vaults)."
                    rows={3}
                    value={formData.objectives}
                    onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-xs focus:border-blue-500 focus:outline-none rounded-xs resize-none placeholder-zinc-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="w-full py-4 rounded-xs bg-zinc-900 text-white text-xs font-mono uppercase tracking-[0.25em] font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>TRANSMIT BRIEF DOSSIER TO LEAD ARCHITECTS</span>
                </button>

              </form>
            ) : (
              /* Success Panel view */
              <motion.div
                id="inquiry-success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
              >
                <div className="p-4 bg-emerald-50 border border-emerald-500/20 text-emerald-600 rounded-full animate-bounce">
                  <CheckCircle2 className="w-12 h-12 stroke-1" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-display font-light text-zinc-900 uppercase tracking-wider">
                    TRANSMISSION COMPLETE
                  </h4>
                  <p className="text-zinc-600 text-xs font-sans tracking-wide leading-relaxed max-w-sm font-light">
                    Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. Your technical design parameters have been safely secured on our server. 
                  </p>
                </div>

                <div className="p-4 bg-zinc-50 rounded-xs border border-zinc-200 text-left space-y-2 max-w-md">
                  <span className="text-[9px] font-mono text-zinc-550 block tracking-widest uppercase">
                    // NEXT ARCHITECTURAL STEPS
                  </span>
                  
                  <div className="text-[11px] text-zinc-750 font-mono flex items-start gap-2">
                    <CornerDownRight className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-none" />
                    <span>Lead designer will verify topographic zoning constraints by tomorrow.</span>
                  </div>
                  <div className="text-[11px] text-zinc-750 font-mono flex items-start gap-2">
                    <CornerDownRight className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-none" />
                    <span>A private proposal outline will be delivered to your inbox: {formData.email}.</span>
                  </div>
                </div>

                <button
                  type="button"
                  id="inquiry-success-close-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 text-xs font-mono uppercase tracking-[0.15em] border border-zinc-300 rounded-xs transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </motion.div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
