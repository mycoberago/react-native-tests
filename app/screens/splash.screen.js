/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

export default class SplashScreen extends Component {

  constructor () {
    super()

    this.state = {
      animating: true
    }
  }

  componentDidMount () {

    setTimeout(() => {

      this.setState({animating: false}, ()=> {
        this.props.navigation.navigate('Home')
      })

    }, 2000);

  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ActivityIndicator
            size="large"
            animating={ this.state.animating }
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
