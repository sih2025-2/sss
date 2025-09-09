import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  onClick: () => void;
  variant?: "math" | "reading" | "science";
}

export const SubjectCard = ({ 
  title, 
  description, 
  icon: Icon, 
  progress, 
  onClick,
  variant = "math"
}: SubjectCardProps) => {
  const getGradient = () => {
    switch (variant) {
      case "math": return "bg-gradient-primary";
      case "reading": return "bg-gradient-accent";  
      case "science": return "bg-gradient-secondary";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <Card className="group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-medium border-2 border-border rounded-2xl overflow-hidden">
      <div className={`${getGradient()} p-1`}>
        <div className="bg-card rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl ${getGradient()} shadow-soft`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className={`${getGradient()} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Button 
            onClick={onClick}
            variant="playful" 
            size="lg" 
            className="w-full group-hover:animate-bounce-soft"
          >
            Start Learning!
          </Button>
        </div>
      </div>
    </Card>
  );
};