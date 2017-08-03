import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App2 extends Component {
	static navigationOptions = {
		title: 'App2 Title',
    tabBarLabel: 'Movie',
	}
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
        	onPress = {() => navigate('App')}
        	title = 'App'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8FCFF',
  },
});