/* @flow */

import React, { Component } from 'react';
import HomeComponent from '../components/home.component';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { inject } from 'mobx-react';


@inject('stores')
export default class HomeScreen extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    console.log("HomeScreen props",this.props);
  }
  render() {
    return (
      <HomeComponent { ...this.props } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
