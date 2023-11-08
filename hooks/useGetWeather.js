import React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        'https://api.openweathermap.org/data/2.5/forecast?lat=37.33150351&lon=-122.03071596&appid=efdd6df5f03ba99a35fd5c53c6ae17f5&units=metric'
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, errorMsg, weather];
};

export default useGetWeather;
