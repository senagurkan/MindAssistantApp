import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  sentiment: 'positive' | 'neutral' | 'negative';
  summary: string | null;
  suggestion: string | null;
  emoji: string;
}

export const ResultCard: React.FC<Props> = ({ sentiment, summary, suggestion, emoji }) => {
  return (
    <View style={styles.resultCard}>
      <View style={styles.resultHeader}>
        <Text style={styles.resultEmoji}>{emoji}</Text>
        <Text style={styles.resultTitle}>Analiz Tamamlandı</Text>
      </View>

      <View style={styles.resultSection}>
        <Text style={styles.resultLabel}>Duygu Durumu</Text>
        <Text style={styles.resultValue}>
          {sentiment === 'positive' ? 'Pozitif' :
           sentiment === 'negative' ? 'Negatif' :
           'Nötr'}
        </Text>
      </View>

      {summary && (
        <View style={styles.resultSection}>
          <Text style={styles.resultLabel}>Özet</Text>
          <Text style={styles.resultValue}>{summary}</Text>
        </View>
      )}

      {suggestion && (
        <View style={[styles.resultSection, styles.suggestionSection]}>
          <Text style={styles.resultLabel}>💡 Öneri</Text>
          <Text style={styles.resultValue}>{suggestion}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultCard: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  resultEmoji: {
    fontSize: 28,
    marginRight: 12,
  },
  resultTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  resultSection: {
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#95A5A6',
    marginBottom: 6,
  },
  resultValue: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#2D3436',
    lineHeight: 22,
  },
  suggestionSection: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
  },
});
