import { View, Text ,Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import AppNavigation from '../navigation'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
export default function HomeScreen() {
    const [messages,setMessages]=useState(dummyMessages)
  return (
    <View style={tw`flex-1 bg-white`}>
      <SafeAreaView style={tw`flex-1 flex mx-5`}>
        <View style={tw`flex-row justify-center`}>
            <Image source={require('../../assets/images/bot.png')} style={{width:hp(15),height:hp(15)}} />

        </View>
        {
            /* features || messages   */
        }
        {
           messages.length>0 ? (
                <View style={tw`my-2 flex-1`}>
                     <Text style={{...tw`ml-1 font-semibold text-gray-700 `, fontSize: wp(5)}}>Assistant</Text>
                     <View style={{...tw`my-2 bg-neutral-200 rounded-3xl p-4`, height: hp(58)}}>
                        <ScrollView
                        bounces={false}
                        style={tw`my-2`}
                        showsVerticalScrollIndicator={false}
                        >
                            {
                                messages.map((message,index)=>{
                                    if(message.role=="assistant"){
                                        if(message.content.includes('https')){
                                            //this an ai image
                                        }else{
                                            //text response
                                        }
                                    }else{
                                        //user input
                                    }
                                })
                            }

                        </ScrollView>
                        
                    </View>
                </View>
            ):(
                <Features />
            )
        }

      </SafeAreaView>
    </View>
  )
}