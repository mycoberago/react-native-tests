/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MarketItem = (props) => {
  let { item,navigation } = props;

  const itemPress = () => {
    navigation.navigate('MarketItemDetails',{
        item: item
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={itemPress}>
      <Image
        source={{uri: item.item.images[0]}}
        style={styles.image}
      />
      <Text style={styles.price}>{"$" + (item.item.price /100).toFixed(2)}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  parent_container: {
    flex: 1
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: deviceHeight * .005,
    borderRadius: deviceWidth * .025
  },
  image: {
    height: deviceHeight * .20,
    resizeMode: 'contain'
  },
  price: {
    margin: deviceWidth * .025,
    alignSelf: 'flex-start',
    padding: deviceWidth * .015,
    overflow: 'hidden',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(46, 204, 113, 1)',
    borderRadius: deviceWidth * .012
  }
});

export default MarketItem;
