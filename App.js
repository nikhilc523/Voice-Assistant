import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import AppNavigation from './src/navigation';
export default function App() {
  return (
   <AppNavigation />
  );
}

