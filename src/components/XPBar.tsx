import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

interface XPBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
}

export const XPBar = ({ currentXP, maxXP, level }: XPBarProps) => {
  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="bg-card rounded-2xl p-4 shadow-soft border-2 border-border">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-badge-gold fill-current animate-pulse-glow" />
          <span className="font-bold text-lg text-foreground">Level {level}</span>
        </div>
        <span className="text-sm text-muted-foreground font-semibold">
          {currentXP} / {maxXP} XP
        </span>
      </div>
      <div className="relative">
        <Progress 
          value={progress} 
          className="h-4 bg-xp-bg rounded-full overflow-hidden"
        />
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-secondary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};