import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableOpacity, Dimensions } from 'react-native';

export default class VideoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ListView
				style = {styles.videoList}
				enableEmptySections = {true}
				dataSource = {this.props.list}
				renderRow = {(video) => 
					<TouchableOpacity onPress = {() => console.log(video)}>
						<View style={styles.video}>
							<Image style={styles.image} source = {{uri: video.pic}} />
							<View style={styles.detail}>
								<Text>{video.title}</Text>
								<Text>{video.tname}</Text>
							</View>
						</View>
					</TouchableOpacity>
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	videoList: {
		marginBottom: 20,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	video: {
		margin: 10,
		backgroundColor: '#ffffff',
		borderRadius: 5
	},
	image: {
		width: (Dimensions.get('window').width - 20),
		height: (Dimensions.get('window').height/4),
		borderRadius: 5
	},
	detail: {
		padding: 10
	}
});