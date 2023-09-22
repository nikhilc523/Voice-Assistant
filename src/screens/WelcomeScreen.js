import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation=useNavigation();
  return (
   <SafeAreaView style={tw`flex-1 flex justify-around bg-white`}>
    <View style={tw`space-y-2 `}>
    <Text style={{...tw`text-center  font-bold text-gray-700`, fontSize: wp(10)}}>
    Jarvis
</Text>

<Text style={{...tw`text-center  tracking-wider font-semibold text-gray-600`, fontSize: wp(4)}}>
        The future is here, Powered by AI

     </Text>
    </View>
    <View style={tw`flex-row justify-center`}>
        <Image source={require('../../assets/images/welcome.png')} style={{width:wp(75),height:wp(75)}} />

    </View>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Home')}
    style={tw`bg-emerald-600 mx-5 p-4 rounded-2xl`} >
    <Text style={{...tw`text-center text-white font-bold`, fontSize: wp(6)}}>
    Get Started!
</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}