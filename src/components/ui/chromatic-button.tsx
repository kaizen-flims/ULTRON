import React from 'react';

interface ChromaticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ChromaticButton: React.FC<ChromaticButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono text-sm font-semibold tracking-wider text-cyan-300 uppercase transition-all duration-300 bg-black/80 border border-cyan-500/50 rounded-lg group hover:text-white shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
