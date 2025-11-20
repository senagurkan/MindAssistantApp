import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { analyzeText } from '../services/aiClient';
import { useJournal } from '../context/JournalContext';

import { HeaderLogo } from '../components/HeaderLogo';
import { AnalyzeInput } from '../components/AnalyzeInput';
import { AnalyzeButton } from '../components/AnalyzeButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { ResultCard } from '../components/ResultCard';
import { getSentimentEmoji, getCardBackground } from '../utils/sentiment';

export const DailyEntryScreen: React.FC = () => {
  const { addEntry } = useJournal();

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const [resultSentiment, setResultSentiment] =
    useState<'positive' | 'neutral' | 'negative' | null>(null);

  const [resultSummary, setResultSummary] = useState<string | null>(null);
  const [resultSuggestion, setResultSuggestion] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const analysis = await analyzeText(text.trim());

      await addEntry({
        text: text.trim(),
        sentiment: analysis.sentiment,
        summary: analysis.summary,
        suggestion: analysis.suggestion,
      });

      setResultSentiment(analysis.sentiment);
      setResultSummary(analysis.summary);
      setResultSuggestion(analysis.suggestion);
      setText('');
    } catch {
      setError('Bir şeyler ters gitti. Lütfen tekrar dene.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: resultSentiment
            ? getCardBackground(resultSentiment)
            : '#FDFBFB',
        },
      ]}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HeaderLogo />

        <AnalyzeInput text={text} onChangeText={setText} />

        <AnalyzeButton
          disabled={!text.trim() || loading}
          loading={loading}
          onPress={handleAnalyze}
        />

        {error && <ErrorMessage message={error} />}

        {resultSentiment && (
          <ResultCard
            sentiment={resultSentiment}
            summary={resultSummary}
            suggestion={resultSuggestion}
            emoji={getSentimentEmoji(resultSentiment)}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
});
