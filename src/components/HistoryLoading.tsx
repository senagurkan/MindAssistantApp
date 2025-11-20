import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const HistoryLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#6C5CE7" />
      <Text style={styles.loadingText}>Yükleniyor...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#636E72',
  },
});
