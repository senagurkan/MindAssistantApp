import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HistoryEmptyState = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🧘🏻‍♀️🧘🏻‍♂️</Text>
      <Text style={styles.emptyText}>Henüz hiç kayıt yok</Text>
      <Text style={styles.emptySubtext}>İlk günlük girişini yapmaya hazır mısın?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2D3436',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#636E72',
    textAlign: 'center',
  },
});
