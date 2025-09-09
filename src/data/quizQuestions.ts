export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface SubjectQuestions {
  math: QuizQuestion[];
  reading: QuizQuestion[];
  science: QuizQuestion[];
}

export const quizQuestions: SubjectQuestions = {
  math: [
    {
      question: "What is 12 + 8?",
      options: ["18", "20", "22", "16"],
      correctAnswer: 1
    },
    {
      question: "What is 15 × 4?",
      options: ["50", "60", "70", "55"],
      correctAnswer: 1
    },
    {
      question: "What is 144 ÷ 12?",
      options: ["11", "12", "13", "14"],
      correctAnswer: 1
    },
    {
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2
    },
    {
      question: "What is 7 × 9?",
      options: ["56", "63", "72", "81"],
      correctAnswer: 1
    },
    {
      question: "What is 100 - 37?",
      options: ["63", "67", "73", "77"],
      correctAnswer: 0
    },
    {
      question: "What is 6²?",
      options: ["30", "32", "36", "42"],
      correctAnswer: 2
    },
    {
      question: "What is 5 + 3 × 4?",
      options: ["17", "20", "32", "35"],
      correctAnswer: 0
    },
    {
      question: "What is 75% of 200?",
      options: ["125", "150", "175", "200"],
      correctAnswer: 1
    },
    {
      question: "What is 18 ÷ 3 + 2?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2
    },
    {
      question: "What is the perimeter of a square with side 5?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1
    },
    {
      question: "What is 2/3 of 30?",
      options: ["15", "18", "20", "25"],
      correctAnswer: 2
    },
    {
      question: "What is 11 × 11?",
      options: ["111", "121", "131", "141"],
      correctAnswer: 1
    },
    {
      question: "What is 240 ÷ 8?",
      options: ["28", "30", "32", "35"],
      correctAnswer: 1
    },
    {
      question: "What is 45 + 67?",
      options: ["102", "112", "122", "132"],
      correctAnswer: 1
    },
    {
      question: "What is 8³?",
      options: ["256", "512", "648", "724"],
      correctAnswer: 1
    },
    {
      question: "What is 1/4 + 1/2?",
      options: ["1/6", "2/6", "3/4", "5/6"],
      correctAnswer: 2
    },
    {
      question: "What is 13 × 7?",
      options: ["81", "91", "101", "111"],
      correctAnswer: 1
    },
    {
      question: "What is the area of a rectangle 6×4?",
      options: ["20", "24", "28", "32"],
      correctAnswer: 1
    },
    {
      question: "What is 999 + 1?",
      options: ["1000", "1001", "1010", "1100"],
      correctAnswer: 0
    }
  ],
  reading: [
    {
      question: "What is the opposite of 'happy'?",
      options: ["Excited", "Sad", "Angry", "Tired"],
      correctAnswer: 1
    },
    {
      question: "Which word rhymes with 'cat'?",
      options: ["Dog", "Hat", "Mouse", "Bird"],
      correctAnswer: 1
    },
    {
      question: "What is a synonym for 'big'?",
      options: ["Small", "Large", "Tiny", "Little"],
      correctAnswer: 1
    },
    {
      question: "In the sentence 'The dog ran quickly', what is the verb?",
      options: ["Dog", "Ran", "Quickly", "The"],
      correctAnswer: 1
    },
    {
      question: "What is the plural of 'child'?",
      options: ["Childs", "Childes", "Children", "Childrens"],
      correctAnswer: 2
    },
    {
      question: "Which word is an adjective: 'The red ball bounced'?",
      options: ["Ball", "Red", "Bounced", "The"],
      correctAnswer: 1
    },
    {
      question: "What does 'gigantic' mean?",
      options: ["Very small", "Very large", "Very fast", "Very slow"],
      correctAnswer: 1
    },
    {
      question: "Which is the correct spelling?",
      options: ["Becuase", "Because", "Becuse", "Becase"],
      correctAnswer: 1
    },
    {
      question: "What is the past tense of 'run'?",
      options: ["Runed", "Ran", "Running", "Runs"],
      correctAnswer: 1
    },
    {
      question: "In 'Harry Potter', who is the main character?",
      options: ["Ron", "Hermione", "Harry", "Dumbledore"],
      correctAnswer: 2
    },
    {
      question: "What type of word is 'quickly'?",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correctAnswer: 3
    },
    {
      question: "Which sentence is correct?",
      options: ["Me and you", "You and I", "I and you", "Me and I"],
      correctAnswer: 1
    },
    {
      question: "What is an antonym for 'hot'?",
      options: ["Warm", "Cool", "Burning", "Blazing"],
      correctAnswer: 1
    },
    {
      question: "In poetry, what are words that sound alike called?",
      options: ["Rhythm", "Rhyme", "Alliteration", "Metaphor"],
      correctAnswer: 1
    },
    {
      question: "What is the setting of a story?",
      options: ["The characters", "Where and when", "The problem", "The ending"],
      correctAnswer: 1
    },
    {
      question: "Which word is a noun: 'She danced beautifully'?",
      options: ["She", "Danced", "Beautifully", "All of them"],
      correctAnswer: 0
    },
    {
      question: "What is the comparative form of 'good'?",
      options: ["Gooder", "Better", "Best", "More good"],
      correctAnswer: 1
    },
    {
      question: "Which punctuation ends a question?",
      options: ["Period", "Comma", "Question mark", "Exclamation point"],
      correctAnswer: 2
    },
    {
      question: "What is a metaphor?",
      options: ["A question", "A comparison using 'like'", "A direct comparison", "A type of poem"],
      correctAnswer: 2
    },
    {
      question: "In 'The Three Little Pigs', what does the wolf say?",
      options: ["Open sesame", "Let me in", "Huff and puff", "Fee fi fo fum"],
      correctAnswer: 2
    },
    {
      question: "What is the main idea of a paragraph?",
      options: ["The first sentence", "The topic sentence", "The last sentence", "The longest sentence"],
      correctAnswer: 1
    }
  ],
  science: [
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctAnswer: 1
    },
    {
      question: "What do plants need to make food?",
      options: ["Water only", "Sunlight only", "Water and sunlight", "Soil only"],
      correctAnswer: 2
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3
    },
    {
      question: "What gas do we breathe in?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
      correctAnswer: 1
    },
    {
      question: "Which animal is a mammal?",
      options: ["Shark", "Eagle", "Dolphin", "Lizard"],
      correctAnswer: 2
    },
    {
      question: "What causes thunder?",
      options: ["Rain", "Wind", "Lightning", "Clouds"],
      correctAnswer: 2
    },
    {
      question: "How many bones are in an adult human body?",
      options: ["106", "206", "306", "406"],
      correctAnswer: 1
    },
    {
      question: "What is the center of an atom called?",
      options: ["Electron", "Neutron", "Proton", "Nucleus"],
      correctAnswer: 3
    },
    {
      question: "Which planet has rings?",
      options: ["Earth", "Mars", "Saturn", "Venus"],
      correctAnswer: 2
    },
    {
      question: "What is the hardest natural substance?",
      options: ["Gold", "Iron", "Diamond", "Silver"],
      correctAnswer: 2
    },
    {
      question: "How long does it take Earth to orbit the Sun?",
      options: ["1 month", "6 months", "1 year", "2 years"],
      correctAnswer: 2
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Cell", "Molecule", "Organ"],
      correctAnswer: 1
    },
    {
      question: "Which force keeps us on the ground?",
      options: ["Magnetism", "Gravity", "Friction", "Electricity"],
      correctAnswer: 1
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: 0
    },
    {
      question: "Which organ pumps blood through the body?",
      options: ["Brain", "Lungs", "Heart", "Liver"],
      correctAnswer: 2
    },
    {
      question: "What causes seasons on Earth?",
      options: ["Distance from Sun", "Earth's tilt", "Moon phases", "Solar flares"],
      correctAnswer: 1
    },
    {
      question: "How many chambers does a human heart have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2
    },
    {
      question: "What is the fastest land animal?",
      options: ["Lion", "Cheetah", "Horse", "Elephant"],
      correctAnswer: 1
    },
    {
      question: "Which part of the plant makes food?",
      options: ["Roots", "Stem", "Leaves", "Flowers"],
      correctAnswer: 2
    },
    {
      question: "What is the boiling point of water?",
      options: ["50°C", "75°C", "100°C", "125°C"],
      correctAnswer: 2
    }
  ]
};