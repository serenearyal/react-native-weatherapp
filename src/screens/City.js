import React from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    image,
    cityName,
    cityText,
    countryName,
    populationText,
    rowLayout,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require('../../assets/city.jpg')}>
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={8000}
            bodyTextStyles={[populationText, rowLayout]}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'7:24 am'}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'6: 11 pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 8,
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    color: 'white',
    fontSize: 20,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default City;
