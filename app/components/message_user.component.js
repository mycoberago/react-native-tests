/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MessageUserComponent = (props) => {
  let { navigation } = props;
  let { item } = navigation.state.params;
  console.log('MessageUser', props.navigation);
  return (
    <View style={styles.container}>

        <View style={styles.header}>

          {/* --------HEADER LEFT--------- */}

          <View style={styles.headerLeft}>

            <View style={styles.imageLeft}>
              <Image
                source={{uri: item.user.photoURL}}
                style={styles.avatar}
              />
            </View>

            <View style={styles.name_location}>
              <Text>{item.user.displayName}</Text>
              <Text>{ item.cityState }</Text>
            </View>

          </View>


          {/* --------HEADER RIGHT--------- */}

          <View style={styles.headerRight}>
            <Image
              source={{uri: item.images[0]}}
              style={styles.list_image}
            />
          </View>

        </View>

        {/* -------- BODY --------- */}
        <View style={styles.body}>
          <Text>Lava You</Text>
        </View>

    </View>
  );
}

export default MessageUserComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: deviceWidth * .025,
    paddingRight: deviceWidth * .025,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  headerLeft: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  imageLeft: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: deviceWidth * .16,
    width: deviceWidth * .16,
    borderRadius: deviceWidth * .08
  },
  name_location: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list_image: {
    height: deviceWidth * .16,
    width: deviceWidth * .18,
    borderRadius: deviceWidth * .01
  },
  body: {
    flex: 9
  },
});
