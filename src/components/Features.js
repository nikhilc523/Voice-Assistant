import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{...tw`space-y-4`, height: hp(60)}}>
    <Text style={{...tw`font-semibold text-gray-700 `, fontSize: wp(6.5)}}>Features</Text>
    <View style={tw`bg-emerald-200 p-4 rounded-xl my-4 `}>
        <View style={tw`flex-row items-center space-x-1`}>
            <Image source={require('../../assets/images/chatgptIcon.png')} style={{width:hp(4),height:hp(4)}} />
            <Text style={{...tw`mx-4 font-semibold text-gray-700 `, fontSize: wp(4.8)}}>ChatGPT</Text>
        </View>
        <Text style={{...tw`my-3 font-medium text-gray-700 `, fontSize: wp(3.8)}}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>

    </View>
    <View style={tw`bg-purple-200 p-4 rounded-xl my-4`}>
        <View style={tw`flex-row items-center space-x-1`}>
            <Image source={require('../../assets/images/dalleIcon.png')} style={{width:hp(4),height:hp(4)}} />
            <Text style={{...tw`mx-4 font-semibold text-gray-700 `, fontSize: wp(4.8)}}>DALL-E</Text>
        </View>
        <Text style={{...tw`my-3 font-medium text-gray-700 `, fontSize: wp(3.8)}}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>

    </View>
    <View style={tw`bg-cyan-200 p-4 rounded-xl my-4`}>
        <View style={tw`flex-row items-center space-x-1`}>
            <Image source={require('../../assets/images/smartaiIcon.png')} style={{width:hp(4),height:hp(4)}} />
            <Text style={{...tw`mx-4 font-semibold text-gray-700 `, fontSize: wp(4.8)}}>Smart AI</Text>
        </View>
        <Text style={{...tw`my-3 font-medium text-gray-700 `, fontSize: wp(3.8)}}> A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>

    </View>
</View>

  )
}