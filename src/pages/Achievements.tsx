import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XPBar } from "@/components/XPBar";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Star, 
  Target, 
  Zap,
  Crown,
  Trophy,
  BookOpen,
  Calculator,
  Microscope,
  Calendar,
  Award,
  Medal,
  Flame,
  Brain
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Achievements = () => {
  const navigate = useNavigate();
  
  // Load stats from localStorage
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('learningStats');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      level: 1,
      currentXP: 0,
      maxXP: 100,
      totalPoints: 0,
      questionsAnswered: 0,
      learningStreak: 0,
      lastActiveDate: null
    };
  });

  // Calculate achievement status based on real stats
  const getAchievementStatus = (requirement: number, current: number) => {
    return current >= requirement;
  };

  const achievementCategories = [
    {
      title: "Getting Started",
      achievements: [
        {
          title: "First Steps",
          description: "Complete your first question",
          icon: Star,
          earned: getAchievementStatus(1, userStats.questionsAnswered),
          rarity: "bronze" as const,
          requirement: "Answer 1 question"
        },
        {
          title: "Quick Learner",
          description: "Answer 10 questions correctly",
          icon: Zap,
          earned: getAchievementStatus(10, userStats.questionsAnswered),
          rarity: "silver" as const,
          requirement: "Answer 10 questions"
        },
        {
          title: "Knowledge Seeker",
          description: "Answer 50 questions",
          icon: Brain,
          earned: getAchievementStatus(50, userStats.questionsAnswered),
          rarity: "gold" as const,
          requirement: "Answer 50 questions"
        }
      ]
    },
    {
      title: "Point Master",
      achievements: [
        {
          title: "First Points",
          description: "Earn your first 10 points",
          icon: Target,
          earned: getAchievementStatus(10, userStats.totalPoints),
          rarity: "bronze" as const,
          requirement: "Earn 10 points"
        },
        {
          title: "Point Collector",
          description: "Earn 100 points",
          icon: Medal,
          earned: getAchievementStatus(100, userStats.totalPoints),
          rarity: "silver" as const,
          requirement: "Earn 100 points"
        },
        {
          title: "Point Master",
          description: "Earn 500 points",
          icon: Trophy,
          earned: getAchievementStatus(500, userStats.totalPoints),
          rarity: "gold" as const,
          requirement: "Earn 500 points"
        }
      ]
    },
    {
      title: "Learning Streak",
      achievements: [
        {
          title: "Consistent Learner",
          description: "Maintain a 3-day learning streak",
          icon: Flame,
          earned: getAchievementStatus(3, userStats.learningStreak),
          rarity: "bronze" as const,
          requirement: "3-day streak"
        },
        {
          title: "Dedicated Student",
          description: "Maintain a 7-day learning streak",
          icon: Calendar,
          earned: getAchievementStatus(7, userStats.learningStreak),
          rarity: "silver" as const,
          requirement: "7-day streak"
        },
        {
          title: "Learning Champion",
          description: "Maintain a 30-day learning streak",
          icon: Crown,
          earned: getAchievementStatus(30, userStats.learningStreak),
          rarity: "gold" as const,
          requirement: "30-day streak"
        }
      ]
    },
    {
      title: "Subject Mastery",
      achievements: [
        {
          title: "Math Wizard",
          description: "Complete 20 math questions",
          icon: Calculator,
          earned: getAchievementStatus(20, Math.floor(userStats.questionsAnswered * 0.4)), // Approximate math questions
          rarity: "silver" as const,
          requirement: "20 math questions"
        },
        {
          title: "Word Master",
          description: "Complete 20 reading questions",
          icon: BookOpen,
          earned: getAchievementStatus(20, Math.floor(userStats.questionsAnswered * 0.3)), // Approximate reading questions
          rarity: "silver" as const,
          requirement: "20 reading questions"
        },
        {
          title: "Science Explorer",
          description: "Complete 20 science questions",
          icon: Microscope,
          earned: getAchievementStatus(20, Math.floor(userStats.questionsAnswered * 0.3)), // Approximate science questions
          rarity: "silver" as const,
          requirement: "20 science questions"
        }
      ]
    }
  ];

  const totalAchievements = achievementCategories.reduce((total, category) => total + category.achievements.length, 0);
  const earnedAchievements = achievementCategories.reduce((total, category) => 
    total + category.achievements.filter(achievement => achievement.earned).length, 0);
  const achievementProgress = (earnedAchievements / totalAchievements) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-4xl font-bold text-foreground">Your Achievements</h1>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <XPBar 
                currentXP={userStats.currentXP}
                maxXP={userStats.maxXP}
                level={userStats.level}
              />
            </div>
            <Card className="p-6 rounded-2xl border-2 border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-badge-gold" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Achievement Progress</h3>
                  <p className="text-muted-foreground">{earnedAchievements} of {totalAchievements} unlocked</p>
                </div>
              </div>
              <Progress value={achievementProgress} className="h-4 mb-2" />
              <p className="text-sm text-muted-foreground text-right">{Math.round(achievementProgress)}% Complete</p>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 rounded-2xl border-2 border-border shadow-soft text-center">
              <div className="text-3xl font-bold text-primary mb-2">{userStats.totalPoints}</div>
              <div className="text-muted-foreground">Total Points</div>
            </Card>
            <Card className="p-6 rounded-2xl border-2 border-border shadow-soft text-center">
              <div className="text-3xl font-bold text-secondary mb-2">{userStats.questionsAnswered}</div>
              <div className="text-muted-foreground">Questions Answered</div>
            </Card>
            <Card className="p-6 rounded-2xl border-2 border-border shadow-soft text-center">
              <div className="text-3xl font-bold text-accent mb-2">{userStats.learningStreak}</div>
              <div className="text-muted-foreground">Day Streak</div>
            </Card>
          </div>

          {/* Achievement Categories */}
          {achievementCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.achievements.map((achievement, index) => (
                  <div key={index} className="group">
                    <AchievementBadge
                      title={achievement.title}
                      description={achievement.description}
                      icon={achievement.icon}
                      earned={achievement.earned}
                      rarity={achievement.rarity}
                    />
                    <div className="mt-2 text-center">
                      <p className="text-xs text-muted-foreground">{achievement.requirement}</p>
                      {!achievement.earned && (
                        <p className="text-xs text-muted-foreground opacity-60">Keep learning to unlock!</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center py-12">
            <Card className="p-8 rounded-2xl border-2 border-border shadow-soft bg-gradient-to-r from-primary/5 to-secondary/5">
              <Award className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce-soft" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Keep Learning!</h3>
              <p className="text-muted-foreground mb-6">
                Continue your learning journey to unlock more achievements and level up!
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/")}
              >
                Continue Learning
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;