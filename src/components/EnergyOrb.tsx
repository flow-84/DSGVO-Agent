import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface EnergyOrbProps {
  isActive: boolean;
  onClick?: () => void;
}

export function EnergyOrb({ isActive, onClick }: EnergyOrbProps) {
  return (
    <div 
      className={cn(
        "relative w-48 h-48 rounded-full",
        "shadow-lg cursor-pointer",
        "transition-all duration-500 ease-in-out",
        "before:absolute before:content-[''] before:inset-0",
        "before:rounded-full before:transition-all before:duration-500",
        "before:bg-gradient-to-r before:from-blue-500/0 before:to-blue-600/0",
        "hover:before:from-blue-500/10 hover:before:to-blue-600/10",
        "hover:before:scale-110",
        isActive ? [
          "scale-110",
          "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
          "before:animate-pulse"
        ] : [
          "scale-100",
          "opacity-80"
        ],
        "hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]",
        "active:scale-95"
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={isActive ? "Voice Assistant deaktivieren" : "Voice Assistant aktivieren"}
    >
      <div className={cn(
        "w-full h-full rounded-full",
        "bg-gradient-to-b from-blue-500 to-blue-600",
        "flex items-center justify-center",
        "transition-all duration-500",
        "hover:from-blue-400 hover:to-blue-500",
        isActive && "animate-pulse"
      )}>
        <div className={cn(
          "w-32 h-32 rounded-full",
          "bg-gradient-to-tr from-blue-400/20 to-blue-500/5",
          "flex items-center justify-center",
          "transition-all duration-500",
          "backdrop-blur-sm",
          "hover:from-blue-300/30 hover:to-blue-400/10",
          isActive ? "scale-110" : "scale-100"
        )} />
      </div>
    </div>
  );
}
