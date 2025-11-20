import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>⚠️ {message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 16,
    backgroundColor: '#FFE5E5',
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  errorText: {
    color: '#D63031',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
});
