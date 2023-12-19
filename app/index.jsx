import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import GameSlider from '../components/GameSlider';

export default function Index({ navigation }) {
    return (
        <SafeAreaView className="flex bg-gray-200" edges={['top']}>
            <StatusBar style= "dark" />
            <View className="flex-row justify-between items-center mx-5">
                <View>
                    <Image source={require('../assets/images/menus.png')}
                        style={{height: hp(6), width: hp(6)}} />
                </View>
                <View className="justify-center items-center">
                    <Image source={require('../assets/images/shopping-cart.png')}
                        style={{height: hp(6), width: hp(6)}} />
                </View>
                <View className="justify-center items-center">
                    <Image source={require('../assets/images/magnifying-glass.png')}
                        style={{height: hp(6), width: hp(6)}} />
                </View>
            </View>

            <View>

                <GameSlider navigation={navigation} />
            
            </View>
        </SafeAreaView>
        
    )
} 