import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  onChangeText: (t: string) => void;
}

export const AnalyzeInput: React.FC<Props> = ({ text, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Düşüncelerini özgürce yaz..."
        placeholderTextColor="#A0A0A0"
        value={text}
        onChangeText={onChangeText}
      />
      <Text style={styles.charCount}>{text.length} karakter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    minHeight: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#2D3436',
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  charCount: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#B2BEC3',
    textAlign: 'right',
    marginTop: 8,
    marginRight: 4,
  },
});
