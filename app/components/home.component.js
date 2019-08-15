/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { observer } from 'mobx-react';
import MarketItem from './market_item.component';

var example_data = require('../example.data');

@observer
export default class HomeComponent extends Component {

  state = {
    loading: true,
    data: null
  }

  componentDidMount () {
    console.log('HomeComponent props',this.props);
    console.log('example_data',example_data);
    setTimeout(() => {
      this.setState({loading: false, data: example_data})
    },1500)
  }
  render() {

    let tempArr = [];

    if(this.state.loading) {
      return(
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: 'center'
              }}
            size="large"
            animating={this.state.loading}
          />
      )
    }

    if(!this.state.data) {
      return (
          <View style={styles.container}>
            <SafeAreaView>
              <Text>No Data</Text>
            </SafeAreaView>
          </View>
      )
    }

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text>I'm the HomeComponent component</Text>

          <FlatList
            data={example_data.data}
            renderItem={(data) =>
              <MarketItem item={data} { ...this.props } />
            }
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
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
