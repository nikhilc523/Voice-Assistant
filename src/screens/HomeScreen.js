import { View, Text ,Image, ScrollView,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigation from '../navigation'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
import Voice from '@react-native-community/voice';
export default function HomeScreen() {
    const [messages,setMessages]=useState(dummyMessages)
    const[recording,setRecording]=useState(false );
    const [speaking,setSpeaking]=useState(true);
    const[result,setResult]=useState('');
    const stopSpeaking=()=>{
        setSpeaking(false);
    }
    const speechStartHandler = e => {
        console.log('speech start event', e);
      };
      const speechEndHandler = e => {
        setRecording(false);
        console.log('speech stop event', e);
      };
      const speechResultsHandler = e => {
        console.log('speech event: ',e);
        const text = e.value[0];
        setResult(text);
        
      };
      const speechErrorHandler = e=>{
        console.log('speech error: ',e);
      }
      const startRecording = async () => {
        setRecording(true);
        //Tts.stop(); 
        try {
          await Voice.start('en-GB'); // en-US
    
        } catch (error) {
          console.log('error', error);
        }
      };
      const stopRecording = async () => {
        
        try {
          await Voice.stop();
          setRecording(false);
          //fetchResponse();
        } catch (error) {
          console.log('error', error);
        }
      };
      const clear = () => {
        Tts.stop();
        setSpeaking(false);
        setLoading(false);
        setMessages([]);
      };
    
    
    useEffect(()=>{
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;
    return ()=>{
        //destroy Handlers
        Voice.destroy().then(Voice.removeAllListeners)
    }
    },[])
    console.log('result',result);
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
                <TouchableOpacity onPress={stopSpeaking}>
                < Image
                style={[{ width: hp(10), height: hp(10) }, tw`rounded-full`]}
                source={require('../../assets/images/voiceLoading.gif')}
                />
            </TouchableOpacity>
            ):(
                // rec start button
                <TouchableOpacity onPress={startRecording}>
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