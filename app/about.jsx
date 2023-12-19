import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SharedElement } from 'react-navigation-shared-element';

const About = () => {
  const route = useRoute();
  const { item } = route.params || {};
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOrder = () => {
    // Handle order logic
  };

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Item not found!</Text>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        className="bg-white mx-1 absolute flex justify-center items-center rounded-full"
        onPress={handleBack}
        style={styles.backButton}
      >
        <Image source={require('../assets/images/previous.png')} style={{ height: hp(4.8), width: wp(10) }} />
      </TouchableOpacity>
      <SharedElement id={`item.${item.id}.image`}>
        <Image source={item.image} style={{ width: wp(100), height: hp(100) }} />
      </SharedElement>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.des}>{item.des}</Text>
      <TouchableOpacity
        className="mx-8 bg-blue-500 absolute flex justify-center items-center rounded-md pr-2"
        onPress={handleOrder}
        style={styles.orderButton}
      >
        <Text style={styles.buttonText}>PRE-ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    border: 1,
    color: 'black',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  itemName: {
    position: 'absolute',
    bottom: 150,
    color: 'white',
    left: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  des: {
    position: 'absolute',
    bottom: 130,
    color: 'white',
    left: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  orderButton: {
    position: 'absolute',
    bottom: 40,
    height: 40,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default About;
