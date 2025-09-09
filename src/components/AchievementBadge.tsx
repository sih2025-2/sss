import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
  rarity?: "bronze" | "silver" | "gold";
}

export const AchievementBadge = ({ 
  title, 
  description, 
  icon: Icon, 
  earned,
  rarity = "bronze"
}: AchievementBadgeProps) => {
  const getBadgeColor = () => {
    switch (rarity) {
      case "gold": return "bg-badge-gold";
      case "silver": return "bg-badge-silver";
      case "bronze": return "bg-badge-bronze";
      default: return "bg-badge-bronze";
    }
  };

  return (
    <Card className={`
      relative p-4 rounded-2xl border-2 transition-all duration-300
      ${earned 
        ? 'border-border shadow-soft hover:shadow-medium hover:scale-105 animate-slide-up' 
        : 'border-muted bg-muted/50 opacity-60'
      }
    `}>
      <div className="text-center">
        <div className={`
          w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center
          ${earned ? `${getBadgeColor()} shadow-medium` : 'bg-muted'}
          ${earned && rarity === 'gold' ? 'animate-pulse-glow' : ''}
        `}>
          <Icon className={`w-8 h-8 ${earned ? 'text-white' : 'text-muted-foreground'}`} />
        </div>
        
        <h4 className={`font-bold text-sm mb-1 ${earned ? 'text-foreground' : 'text-muted-foreground'}`}>
          {title}
        </h4>
        <p className={`text-xs ${earned ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
          {description}
        </p>
        
        {earned && (
          <div className="absolute -top-2 -right-2">
            <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-soft">
              <span className="text-xs text-success-foreground">✓</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};