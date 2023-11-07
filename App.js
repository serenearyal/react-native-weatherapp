import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import useGetWeather from './hooks/useGetWeather';

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather();
  console.log(loading, errorMsg, weather);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
