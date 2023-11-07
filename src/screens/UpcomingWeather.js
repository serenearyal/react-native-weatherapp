import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
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
        <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item) => item.dt} />
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
