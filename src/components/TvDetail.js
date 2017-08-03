import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TvDetail extends Component {
	static navigationOptions = {
		title: 'TV Detail',
	}
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View>
      </View>
    );
  }
}