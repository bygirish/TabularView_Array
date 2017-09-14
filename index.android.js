/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as Arr from './array';

const List =
{
  Personal: {
    Name: 'Anshu',
    Contact: '7750826557'
  },
  Official: {
    Company: 'Employwise',
    Designation: 'Software Developer'
  },
  Social: {
    Facebook: 'anshu@facebook.com',
    Twitter: 'goyal#twitter'
  }
}
;

export default class ArrayView extends Component {

  render() {

    return (
      <View style={styles.container}>
       { Arr.showCleanView(List) }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('TabularView_Array', () => ArrayView);
