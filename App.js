import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}> Calcule seu IMC</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize:30
  }
});