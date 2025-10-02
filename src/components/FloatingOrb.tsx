import { useEffect, useRef, useState } from "react";

export const FloatingOrb = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [eye, setEye] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height; // -0.5..0.5
      const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

      setTilt({ x: clamp(-dy * 8, 8), y: clamp(dx * 8, 8) });
      setEye({ x: clamp(dx * 6, 6), y: clamp(dy * 6, 6) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none select-none">
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl overflow-visible transform-gpu animate-float-slow"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* sphere base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-zinc-300" />
        {/* specular highlights */}
        <div className="absolute -top-2 -left-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 blur-[6px]" />
        <div className="absolute top-4 left-6 w-6 h-3 rounded-full bg-white/60 blur-[3px] rotate-[-20deg]" />
        {/* inner shading */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10" />

        {/* eyes */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3">
          <div
            className="relative w-3 sm:w-3.5 h-6 sm:h-7 rounded-full bg-black/85"
            style={{ transform: `translate(${eye.x}px, ${eye.y}px)` }}
          />
          <div
            className="relative w-3 sm:w-3.5 h-6 sm:h-7 rounded-full bg-black/85"
            style={{ transform: `translate(${eye.x}px, ${eye.y}px)` }}
          />
        </div>

        {/* subtle rim light */}
        <div className="absolute inset-0 rounded-full ring-1 ring-white/40" />
      </div>
    </div>
  );
};
