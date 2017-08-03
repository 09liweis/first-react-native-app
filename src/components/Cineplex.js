import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableOpacity } from 'react-native';
import cineplex from '../services/Cineplex';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Cineplex extends Component {
	constructor() {
		super();
		this.state = {
			theaters: [],
			movies: ds.cloneWithRows([]),
		};
	}
	componentWillMount() {
		cineplex.getMovies().then((res) => {
			this.setState({
				movies: ds.cloneWithRows(res.data)
			});
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<ListView
					enableEmptySections = {true}
					dataSource = {this.state.movies}
					renderRow = {(movie) =>
						<TouchableOpacity onPress = {() => console.log(movie)}>
							<View style={styles.movieRow}>
								<View >
									<Image style={styles.moviePoster} source = {{uri: movie.smallPosterImageUrl}} />
								</View>
								<View style={styles.movieInfo}>
									<Text style={styles.movieName}>{movie.filmName}</Text>
								</View>
							</View>
						</TouchableOpacity>
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f6f6f6',
	},
	movieRow: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 20,
		padding: 20,
		backgroundColor: '#ffffff'
	},
	moviePoster: {
		width: 130,
		height: 190
	},
	movieInfo: {
		marginLeft: 20
	},
	movieName: {
		fontSize: 20
	}
});
