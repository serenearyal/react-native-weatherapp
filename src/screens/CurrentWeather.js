import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={96} color="orange" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>

      <RowText
        messageOne={"It's sunny"}
        messageTwo={'Perfect t-shirt'}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    fontSize: 24,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
