/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

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

            <ImageBackground
              source={{uri: item.images[0]}}
              style={styles.list_image}
            >
              <View style={styles.headerPrice}>
                <Text
                  style={styles.priceText}
                >{"$" + (item.price / 100).toFixed(2)}</Text>
              </View>
            </ImageBackground>

          </View>

        </View>

        {/* -------- BODY --------- */}
        <View style={styles.body}>

          <Input
            placeholder="Enter Message"
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)'
          />

          <Button
            raised
            title="Send"
            icon={
              <Icon
                name="send"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            iconRight={true}
            containerStyle={styles.buttonContainerStyle}
            titleStyle={styles.buttonTitleStyle}
          />

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
  headerPrice: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 204, 113, 0.85)',
    padding: deviceWidth * .005,
    borderRadius: deviceWidth * .005
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold'
  },
  body: {
    flex: 9
  },
  inputStyle: {
    height: deviceHeight * .25,
    width: deviceWidth,
    padding: deviceWidth * .015,
    margin: deviceWidth * .025,
    borderRadius: deviceWidth * .015,
    borderWidth: 1,
    borderColor: 'grey',
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  buttonContainerStyle: {
    marginHorizontal: deviceWidth * .03,
    marginTop: deviceWidth * .025
  },
  buttonTitleStyle: {
      marginRight: deviceWidth * .03,
      fontWeight: 'bold'
  }
});
