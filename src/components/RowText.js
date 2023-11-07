import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const RowText = (props) => {
  const { messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles } = props;
  return (
    <SafeAreaView>
      <View style={containerStyles}>
        <Text style={messageOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RowText;
