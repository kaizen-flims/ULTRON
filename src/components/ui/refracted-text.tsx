import React from 'react';

interface RefractedTextProps {
  text: string;
}

export const RefractedText: React.FC<RefractedTextProps> = ({ text }) => {
  return (
    <div className="relative select-none text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-indigo-500 drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
        {text}
      </h1>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-overlay">
        <span className="text-6xl md:text-8xl font-extrabold tracking-widest text-cyan-200 blur-[2px] animate-pulse">
          {text}
        </span>
      </div>
    </div>
  );
};
