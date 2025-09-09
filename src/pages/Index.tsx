import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XPBar } from "@/components/XPBar";
import { SubjectCard } from "@/components/SubjectCard";
import { AchievementBadge } from "@/components/AchievementBadge";
import { QuizCard } from "@/components/QuizCard";
import { quizQuestions } from "@/data/quizQuestions";
import { 
  Calculator, 
  BookOpen, 
  Microscope, 
  Trophy, 
  Star, 
  Target, 
  Zap,
  Sparkles,
  Award,
  Crown
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroMascot from "@/assets/hero-mascot.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<"home" | "quiz">("home");
  const [currentSubject, setCurrentSubject] = useState<"math" | "reading" | "science">("math");
  
  // Load stats from localStorage or use defaults
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

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('learningStats', JSON.stringify(userStats));
  }, [userStats]);

  // Check and update learning streak on component mount
  useEffect(() => {
    const today = new Date().toDateString();
    const lastActive = userStats.lastActiveDate;
    
    if (lastActive) {
      const lastActiveDate = new Date(lastActive);
      const todayDate = new Date(today);
      const diffTime = todayDate.getTime() - lastActiveDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Consecutive day - increment streak
        setUserStats(prev => ({
          ...prev,
          learningStreak: prev.learningStreak + 1,
          lastActiveDate: today
        }));
      } else if (diffDays > 1) {
        // Gap in learning - reset streak
        setUserStats(prev => ({
          ...prev,
          learningStreak: 1,
          lastActiveDate: today
        }));
      }
      // If diffDays === 0, same day, no change needed
    } else {
      // First time user
      setUserStats(prev => ({
        ...prev,
        learningStreak: 1,
        lastActiveDate: today
      }));
    }
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const currentQuestions = quizQuestions[currentSubject];

  const updateStats = (pointsEarned: number) => {
    setUserStats(prev => {
      const newXP = prev.currentXP + pointsEarned;
      const newLevel = Math.floor(newXP / prev.maxXP) + 1;
      const remainingXP = newXP % prev.maxXP;
      
      return {
        ...prev,
        currentXP: remainingXP,
        level: newLevel > prev.level ? newLevel : prev.level,
        maxXP: newLevel > prev.level ? prev.maxXP + 50 : prev.maxXP, // Increase XP requirement each level
        totalPoints: prev.totalPoints + pointsEarned,
        questionsAnswered: prev.questionsAnswered + 1,
        lastActiveDate: new Date().toDateString()
      };
    });
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      // Award points for correct answers
      updateStats(10);
    } else {
      // Still count the question as answered, but no points
      setUserStats(prev => ({
        ...prev,
        questionsAnswered: prev.questionsAnswered + 1,
        lastActiveDate: new Date().toDateString()
      }));
    }
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentView("home");
      setCurrentQuestionIndex(0);
    }
  };

  const scrollToSubjects = () => {
    const subjectsSection = document.getElementById('learning-path');
    if (subjectsSection) {
      subjectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (currentView === "quiz") {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView("home")}
                className="mb-4"
              >
                ← Back to Dashboard
              </Button>
              <XPBar {...userStats} />
            </div>
            
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-foreground capitalize">{currentSubject} Quiz</h2>
            </div>
            
            <QuizCard 
              question={currentQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
            
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Question {currentQuestionIndex + 1} of {currentQuestions.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto text-center relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
                Make Learning 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Fun</span>!
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of kids on an epic learning adventure. Earn XP, unlock badges, and become a learning hero!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={scrollToSubjects}
                >
                  <Sparkles className="mr-2" />
                  Start Adventure
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => navigate("/achievements")}
                >
                  <Trophy className="mr-2" />
                  View Achievements
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={heroMascot} 
                alt="Learning mascot owl with graduation cap" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-strong animate-bounce-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* XP Bar */}
            <div className="mb-12">
              <XPBar {...userStats} />
            </div>

            {/* Subjects Grid */}
            <div id="learning-path" className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                Choose Your Learning Path
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <SubjectCard
                  title="Math Masters"
                  description="Solve puzzles and conquer numbers!"
                  icon={Calculator}
                  progress={75}
                  variant="math"
                  onClick={() => {
                    setCurrentSubject("math");
                    setCurrentView("quiz");
                    setCurrentQuestionIndex(0);
                  }}
                />
                <SubjectCard
                  title="Reading Quest" 
                  description="Explore magical worlds through stories!"
                  icon={BookOpen}
                  progress={60}
                  variant="reading"
                  onClick={() => {
                    setCurrentSubject("reading");
                    setCurrentView("quiz");
                    setCurrentQuestionIndex(0);
                  }}
                />
                <SubjectCard
                  title="Science Lab"
                  description="Discover amazing experiments!"
                  icon={Microscope}
                  progress={45}
                  variant="science"
                  onClick={() => {
                    setCurrentSubject("science");
                    setCurrentView("quiz");
                    setCurrentQuestionIndex(0);
                  }}
                />
              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                Your Achievements
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AchievementBadge
                  title="First Steps"
                  description="Complete your first lesson"
                  icon={Star}
                  earned={true}
                  rarity="bronze"
                />
                <AchievementBadge
                  title="Quick Learner"
                  description="Answer 10 questions correctly"
                  icon={Zap}
                  earned={true}
                  rarity="silver"
                />
                <AchievementBadge
                  title="Perfect Score"
                  description="Get 100% on a quiz"
                  icon={Target}
                  earned={true}
                  rarity="gold"
                />
                <AchievementBadge
                  title="Learning Champion"
                  description="Reach level 10"
                  icon={Crown}
                  earned={false}
                  rarity="gold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Your Learning Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 rounded-2xl border-2 border-border shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">{userStats.totalPoints}</div>
                <div className="text-muted-foreground">Total Points Earned</div>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-border shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">{userStats.questionsAnswered}</div>
                <div className="text-muted-foreground">Questions Answered</div>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-border shadow-soft">
                <div className="text-4xl font-bold text-accent mb-2">{userStats.learningStreak}</div>
                <div className="text-muted-foreground">Days Learning Streak</div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
