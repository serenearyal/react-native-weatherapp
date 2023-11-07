import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt: 1661871600,
    main: {
      temp: 296.76,
      feels_like: 296.98,
      temp_min: 296.76,
      temp_max: 297.87,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 69,
      temp_kf: -1.11,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
  },
  {
    dt: 1661882400,
    main: {
      temp: 295.45,
      feels_like: 295.59,
      temp_min: 292.84,
      temp_max: 295.45,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 931,
      humidity: 71,
      temp_kf: 2.61,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require('../../assets/clouds.jpg')}>
        <Text>UpcomingWeather</Text>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
