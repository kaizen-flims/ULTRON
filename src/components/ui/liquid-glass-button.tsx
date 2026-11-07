import React from 'react';

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple' | 'amber';
  children: React.ReactNode;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  variant = 'cyan',
  children,
  className = '',
  ...props
}) => {
  const styles = {
    cyan: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300 shadow-[0_8px_32px_0_rgba(0,240,255,0.2)] hover:bg-cyan-500/20',
    purple: 'bg-purple-500/10 border-purple-400/30 text-purple-300 shadow-[0_8px_32px_0_rgba(168,85,247,0.2)] hover:bg-purple-500/20',
    amber: 'bg-amber-500/10 border-amber-400/30 text-amber-300 shadow-[0_8px_32px_0_rgba(245,158,11,0.2)] hover:bg-amber-500/20',
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-xl backdrop-blur-md border transition-all duration-300 font-medium tracking-wide active:scale-95 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
