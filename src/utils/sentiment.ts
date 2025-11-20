// src/utils/sentiment.ts

import { JournalEntry } from '../context/JournalContext';

// Duyguya göre emoji
export const getSentimentEmoji = (sentiment: JournalEntry['sentiment']) => {
  switch (sentiment) {
    case 'positive':
      return '✨';
    case 'negative':
      return '🌧️';
    default:
      return '☁️';
  }
};

// Duyguya göre kart arka plan rengi
export const getCardBackground = (sentiment: JournalEntry['sentiment']) => {
  switch (sentiment) {
    case 'positive':
      return '#FFF4D6'; // yeni pozitif
    case 'negative':
      return '#E8ECF2'; // yeni negatif
    default:
      return '#F7F7FA'; // yeni nötr
  }
};

// Duyguya göre görünen Türkçe metin
export const getSentimentText = (sentiment: JournalEntry['sentiment']) => {
  switch (sentiment) {
    case 'positive':
      return 'Pozitif';
    case 'negative':
      return 'Negatif';
    default:
      return 'Nötr';
  }
};
