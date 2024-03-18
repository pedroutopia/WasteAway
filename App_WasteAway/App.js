import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Login from './src/components/Login';

export default function App() {
  return (
    <>
      <StatusBar translucent={true}/>
      <Login/>
    </>
  );
}