/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { observer } from 'mobx-react';
import MarketItem from './market_item.component';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

var example_data = require('../example.data');
const deviceHeight = Dimensions.get('window').height;

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

  getImages = () => {

    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    })

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
      <SafeAreaView style={styles.container}>

          <View style={styles.listContainer} >

            <FlatList
              data={example_data.data}
              renderItem={(data) =>
                <MarketItem item={data} { ...this.props } />
              }
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
            />

          </View>

          <View style={styles.iconView}>

            <Icon
              raised
              size={deviceHeight * .035}
              name="camera"
              type="entypo"
              containerStyle={ styles.iconContainer }
              onPress={this.getImages}
            />

          </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  listContainer: {
    flex: 1
  },
  iconView: {
    height: deviceHeight * .08,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
