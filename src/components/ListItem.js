import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={24} color={'orange'} />
      <View style={{ flexDirection: 'column' }}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});
export default ListItem;
