import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, ListView, TouchableOpacity } from 'react-native';
import weather from '../services/Weather';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Weather extends Component {
	constructor() {
		super();
		this.state = {
			locations: ds.cloneWithRows([]),
			initialPosition: 'unknown',
			lastPosition: 'unknown',
			weather: 'unknown',
			location: '',
			locationId: ''
		}
	}
	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				initialPosition: position
			});
		});
		this.watchID = navigator.geolocation.watchPosition((position) => {
			this.setState({
				lastPosition: position
			});
		});
	}
	getSearchLocations(text) {
		weather.getSearchLocations(text).then((res) => {
			console.log(res);
			this.setState({
				locations: ds.cloneWithRows(res)
			});
		});
	}
	getCurrentConditions(key) {
		weather.getCurrentConditions(key).then((res) => {
			this.setState({
				weather: res,
				//locations: ds.cloneWithRows([])
			});
		});
	}
	render() {
		const weather = this.state.weather;

		return (
			<ScrollView style={styles.container}>
				<View>
					<TextInput
						onChangeText = {(text) => this.getSearchLocations(text)}
						placeholder = 'Search the location'
					/>
				</View>
				<ListView
					enableEmptySections = {true}
					dataSource = {this.state.locations}
					renderRow = {(location) => 
						<TouchableOpacity onPress = {() => this.getCurrentConditions(location.Key)}>
							<View>
								<Text>{location.LocalizedName}, {location.AdministrativeArea.LocalizedName}, {location.Country.LocalizedName}</Text>
							</View>
						</TouchableOpacity>
					}
				/>
				{(weather !== 'unknown') ?
				<View style={styles.container}>
					<Text>{weather.WeatherText}</Text>
					<Image style={styles.icon} source = {{uri: weather.getIcon(weather.WeatherIcon)}}/>
				</View>
				: 
				<View style={styles.block}>
					<Text>Loading</Text>
				</View>
				}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3f3f3',
		flex: 1,
	},
	icon: {
		width: 75,
		height: 45
	}
});