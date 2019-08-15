/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MarketItemDetailsComponent = (props) => {
  let { navigation } = props;
  let { item } = navigation.state.params.item;

  console.log('MarketItemDetails',item);

  return(
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={item.images}
          renderItem={(image) =>
              <Image
                source={{uri: image.item}}
                style={styles.image}
              />
          }

          keyExtractor={ (item,index) => index.toString() }
          horizontal={true}
        />

        <Text>{item.title}</Text>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceHeight * .25,
    width: deviceWidth * .80,
    margin: deviceWidth * .025
  }
});

export default MarketItemDetailsComponent
