import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const logo = require('../assets/logo.png');

export const HeaderLogo = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Duygu Akışı</Text>
      <Text style={styles.subtitle}>Bugün neler hissediyorsun?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 32,
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    color: '#636E72',
  },
});
