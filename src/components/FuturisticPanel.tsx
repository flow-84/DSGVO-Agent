import React from 'react';

interface FuturisticPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function FuturisticPanel({ children, className = '' }: FuturisticPanelProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 backdrop-blur-md rounded-2xl 
                      border border-blue-500/10 shadow-lg transform-gpu transition-all duration-500
                      group-hover:from-blue-500/10 group-hover:to-blue-600/10">
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-1000
                      animate-shine rounded-2xl" />
      </div>

      {/* Inner glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-[20px] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Content container */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
