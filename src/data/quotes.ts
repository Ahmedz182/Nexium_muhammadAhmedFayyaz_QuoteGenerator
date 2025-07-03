export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  // Success & Achievement
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 2,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    id: 3,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "success"
  },
  
  // Motivation & Inspiration
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation"
  },
  {
    id: 5,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "motivation"
  },
  {
    id: 6,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "motivation"
  },
  
  // Life & Wisdom
  {
    id: 7,
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "life"
  },
  {
    id: 8,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "life"
  },
  {
    id: 9,
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "life"
  },
  
  // Leadership & Change
  {
    id: 10,
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "leadership"
  },
  {
    id: 11,
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    category: "leadership"
  },
  {
    id: 12,
    text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    author: "Ronald Reagan",
    category: "leadership"
  },
  
  // Creativity & Innovation
  {
    id: 13,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "creativity"
  },
  {
    id: 14,
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    category: "creativity"
  },
  {
    id: 15,
    text: "The secret to creativity is knowing how to hide your sources.",
    author: "Pablo Picasso",
    category: "creativity"
  },
  
  // Learning & Growth
  {
    id: 16,
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    category: "learning"
  },
  {
    id: 17,
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
    category: "learning"
  },
  {
    id: 18,
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    category: "learning"
  },
  
  // Happiness & Positivity
  {
    id: 19,
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "happiness"
  },
  {
    id: 20,
    text: "The best way to cheer yourself up is to try to cheer somebody else up.",
    author: "Mark Twain",
    category: "happiness"
  },
  {
    id: 21,
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    category: "happiness"
  },
  
  // Perseverance & Resilience
  {
    id: 22,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "perseverance"
  },
  {
    id: 23,
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    category: "perseverance"
  },
  {
    id: 24,
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
    category: "perseverance"
  },
  
  // Dreams & Goals
  {
    id: 25,
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    category: "dreams"
  },
  {
    id: 26,
    text: "A goal is not always meant to be reached, it often serves simply as something to aim at.",
    author: "Bruce Lee",
    category: "dreams"
  },
  {
    id: 27,
    text: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
    category: "dreams"
  }
];

export const categories = [
  "success",
  "motivation", 
  "life",
  "leadership",
  "creativity",
  "learning",
  "happiness",
  "perseverance",
  "dreams"
];
