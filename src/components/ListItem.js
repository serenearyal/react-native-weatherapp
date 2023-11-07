import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
  const { dt, min, max, condition } = props;
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name={'sun'} size={24} color={'orange'} />
      <Text style={date}>{dt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
      <Text>{condition}</Text>
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
