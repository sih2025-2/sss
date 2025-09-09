import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
}

export const QuizCard = ({ question, onAnswer }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === question.correctAnswer) return "success";
    if (index === selectedAnswer && index !== question.correctAnswer) return "destructive";
    return "outline";
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    if (index === question.correctAnswer) return <CheckCircle className="w-5 h-5" />;
    if (index === selectedAnswer && index !== question.correctAnswer) return <XCircle className="w-5 h-5" />;
    return null;
  };

  return (
    <Card className="p-6 rounded-2xl border-2 border-border shadow-soft bg-card">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{question.question}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={getButtonVariant(index)}
            size="lg"
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`
              h-auto min-h-[60px] p-4 text-left justify-start whitespace-normal
              ${showResult && index === question.correctAnswer ? 'animate-bounce-soft' : ''}
              ${showResult && index === selectedAnswer && index !== question.correctAnswer ? 'animate-wiggle' : ''}
            `}
          >
            <div className="flex items-center gap-3 w-full">
              <span className="flex-1">{option}</span>
              {getButtonIcon(index)}
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};