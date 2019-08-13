/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import { observer } from 'mobx-react';
import MarketItem from './market_item.component';

var example_data = require('../example.data');

@observer
export default class HomeComponent extends Component {

  componentDidMount () {
    console.log('HomeComponent props',this.props);
    console.log('example_data',example_data);
  }
  render() {
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
