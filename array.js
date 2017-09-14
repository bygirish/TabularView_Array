
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export function showCleanView(List) {

  showList = Object.keys(List).map( (key) =>
    {
      value = List[key];
      heading =
        <Text style={{fontSize: 16, margin: 10, marginLeft: 0, color: 'black'}}>
        {key}
        </Text>;

      smallListItem =
      Object.keys(value).map( (key) =>

          <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginLeft: 10, color: 'black'}}>{key}: </Text>
          <Text style={{color: 'black'}}>{value[key]}</Text>
          </View>
      );

      return(
        <View>
          {heading}
          {smallListItem}
        </View>
      );
    }
  );

  return (
        <View>{showList}</View>
  );

}
