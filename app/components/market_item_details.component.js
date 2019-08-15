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
import { Button } from 'react-native-elements';

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

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}><Text style={styles.price_label}>Price:</Text> {"$" + (item.price /100).toFixed(2)}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Button
          raised
          title="Message User"
          containerStyle={styles.buttonContainer}
        />

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
  },
  title: {
    fontSize: deviceWidth * .05,
    fontWeight: 'bold',
    padding: deviceWidth * .025
  },
  desc: {
    padding: deviceWidth * .025
  },
  price: {
    padding: deviceWidth * .025
  },
  price_label: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginHorizontal: deviceWidth * .05
  }
});

export default MarketItemDetailsComponent
