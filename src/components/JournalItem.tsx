import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JournalEntry } from '../context/JournalContext';
import { 
    getSentimentEmoji, 
    getCardBackground, 
    getSentimentText 
  } from '../utils/sentiment';  

export const JournalItem = ({ item }: { item: JournalEntry }) => {
  const date = new Date(item.createdAt);
  const dateText = date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const timeText = date.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={[styles.card, { backgroundColor: getCardBackground(item.sentiment) }]}>
      <View style={styles.cardHeader}>
        <View style={styles.sentimentBadge}>
          <Text style={styles.cardEmoji}>{getSentimentEmoji(item.sentiment)}</Text>
          <Text style={styles.sentimentText}>{getSentimentText(item.sentiment)}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.cardDate}>{dateText}</Text>
          <Text style={styles.cardTime}>{timeText}</Text>
        </View>
      </View>

      <Text style={styles.cardText} numberOfLines={3}>
        {item.text}
      </Text>

      {item.summary && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryLabel}>ÖZET</Text>
          <Text style={styles.cardSummary} numberOfLines={2}>
            {item.summary}
          </Text>
        </View>
      )}

      {item.suggestion && (
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestionIcon}>💡</Text>
          <Text style={styles.cardSuggestion} numberOfLines={2}>
            {item.suggestion}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  sentimentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  cardEmoji: {
    fontSize: 18,
    marginRight: 6,
  },
  sentimentText: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },

  dateContainer: {
    alignItems: 'flex-end',
  },
  cardDate: {
    fontSize: 12,
    fontFamily: 'Montserrat-Light',
    color: '#636E72',
  },
  cardTime: {
    fontSize: 11,
    fontFamily: 'Montserrat-Light',
    color: '#95A5A6',
    marginTop: 2,
  },

  cardText: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#2D3436',
    marginBottom: 12,
  },

  summaryContainer: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  summaryLabel: {
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
    color: '#95A5A6',
    marginBottom: 4,
  },
  cardSummary: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },

  suggestionContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginTop: 8,
  },
  suggestionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  cardSuggestion: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
});
