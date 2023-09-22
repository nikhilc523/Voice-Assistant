import { View, Text ,Image, ScrollView,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AppNavigation from '../navigation'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
export default function HomeScreen() {
    const [messages,setMessages]=useState(dummyMessages)
    const[recording,setRecording]=useState(false );
    const [speaking,setSpeaking]=useState(true);
    const clear=()=>{
        setMessages([]);
    }
    const stopSpeaking=()=>{
        setSpeaking(false);
    }
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
                                            return(
                                                <View 
                                            key={index}
                                            style={tw`flex-row justify-start`}
                                            >
                                                <View style={tw`p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none`}>
                                                                <Image
                                                                    source={{ uri: message.content }}
                                                                    style={[{ width: wp(60), height: wp(60) }, tw`rounded-2xl`]}
                                                                    resizeMode='contain'
                                                                    />


                                                </View>

                                            </View>
                                            )
                                        }else{
                                            //text response
                                            return(
            
                                             <View 
                                             key={index}
                                             style={{...tw`bg-emerald-100 rounded-xl p-2 rounded-tl-none my-2`, width: wp(70)}}>
                                                <Text>
                                                    {message.content}

                                                </Text>
                                            </View>

                                 
                                            )
                                        }
                                    }else{
                                        //user input
                                        return(
                                        <View key={index} style={tw`flex-row justify-end` } >
                                             <View style={{...tw`bg-white rounded-xl p-2 rounded-tr-none my-2`, width: wp(70)}}>
                                                <Text>
                                                    {message.content}

                                                </Text>
                                            </View>

                                        </View>
                                        )
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


        {
            /* record, clear and stop button */
        }
        <View style={tw`flex justify-center items-center`}>
            {
            recording ? (
                <TouchableOpacity>
                < Image
                style={[{ width: hp(10), height: hp(10) }, tw`rounded-full`]}
                source={require('../../assets/images/voiceLoading.gif')}
                />
            </TouchableOpacity>
            ):(
                <TouchableOpacity>
                < Image
                style={[{ width: hp(10), height: hp(10) }, tw`rounded-full`]}
                source={require('../../assets/images/recordingIcon.png')}
                />

                </TouchableOpacity>
                    

            )
}
        {
            messages.length>0 && 
            (
                <TouchableOpacity
                style={tw`bg-neutral-400 rounded-3xl p-2 absolute right-10`}
                onPress={clear}
                >
                    <Text style={tw`text-white font-semibold `}>
                    Clear
                    </Text>

                </TouchableOpacity>
            )
        }
         {
            speaking && 
            (
                <TouchableOpacity
                style={tw`bg-red-400 rounded-3xl p-2 absolute left-10`}
                onPress={stopSpeaking}
                >
                    <Text style={tw`text-white font-semibold `}>
                    Stop
                    </Text>

                </TouchableOpacity>
            )
        }
          
        </View>

      </SafeAreaView>
    </View>
  )
}