import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

export default function GameSlider() {
  const navigation = useNavigation();

  const ItemCard = ({ item, index }, parallaxProps) => {
    const handlePress = () => {
      navigation.navigate('about', { item });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
          <SharedElement id={`item.${item.id}.image`}>
            <View style={{ height: wp(130) - 100, width: hp(45) }}>
                <ParallaxImage
                  source={item.image}
                  containerStyle={{ borderRadius: 20, flex: 1 }}
                  style={{ resizeMode: 'contain' }}
                  parallaxFactor={1.2}
                  {...parallaxProps}
                />
              
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={{ width: wp(44), height: hp(10) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0, y: 2 }}
                className="absolute bottom-0"
              />
              <Text style={{ position: 'absolute', bottom: 20, left: 10, color: 'white', fontSize: hp(3), fontWeight: 'bold' }}>
                {item.name}
              </Text>
            </View>
          </SharedElement>
        </TouchableOpacity>
      
    );
  };

  return (
    <Carousel
      data={sliderImages}
      loop={false}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={hp(100)}
      firstItem={1}
      // thumbnailPosition={'top'}
      // swipeThreshold={100}
      // flickThreshold={0}
      enableMomentum={true}
      itemWidth={wp(100)}
      sliderHeight={hp(90)}
      itemHeight={hp(50)}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
      containerCustomStyle={{ overflow: 'hidden' }}
      vertical={true}
      windowSize={2}
    />
  );
}
