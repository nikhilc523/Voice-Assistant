import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import AppNavigation from './src/navigation';
import { useEffect } from 'react';
import { apiCall } from './src/api/openAI';


export default function App() {
  useEffect(()=>{
    //apiCall('what is quantum computing?');

  },[])
  return (
   <AppNavigation />
  );
}

