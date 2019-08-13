/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MarketItem = (props) => {
  let { item } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.item.images[0]}}
        style={styles.image}
      />
      <Text style={styles.price}>{"$" + (item.item.price /100).toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    margin: deviceHeight * .005
  },
  image: {
    width: deviceWidth * .80,
    height: deviceHeight * .25
  },
  price: {
    margin: deviceWidth * .025,
    alignSelf: 'flex-start',
    padding: deviceWidth * .025,
    overflow: 'hidden',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: deviceWidth * .012
  }
});

export default MarketItem;
