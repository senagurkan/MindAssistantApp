import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useJournal } from '../context/JournalContext';

import { HistoryHeader } from '../components/HistoryHeader';
import { HistoryLoading } from '../components/HistoryLoading';
import { HistoryError } from '../components/HistoryError';
import { HistoryEmptyState } from '../components/HistoryEmptyState';
import { JournalItem } from '../components/JournalItem';
import { getSentimentEmoji, getCardBackground, getSentimentText } from '../utils/sentiment';


export const HistoryScreen = () => {
  const { entries, loading, error } = useJournal();

  return (
    <View style={styles.container}>
      
      <HistoryHeader />

      {loading && <HistoryLoading />}
      {error && <HistoryError message={error} />}

      {!loading && entries.length === 0 && <HistoryEmptyState />}

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <JournalItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFB',
    paddingHorizontal: 32,
    paddingTop: 60,
  },
  listContent: {
    paddingBottom: 20,
  },
});
