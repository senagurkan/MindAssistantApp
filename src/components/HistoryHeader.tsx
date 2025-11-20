import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const logo = require('../assets/logo.png');

export const HistoryHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Duygu Yolculuğun</Text>
      <Text style={styles.subtitle}>Daha önce neler hissettiğini hatırlamak iyi gelebilir</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2D3436',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    color: '#636E72',
    textAlign: 'center',
  },
});
