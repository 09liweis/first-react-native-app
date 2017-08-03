import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ListView } from 'react-native';
import cineplex from '../../services/Cineplex';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class Theaters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: props.navigation.state.params.movie,
			theaters: ds.cloneWithRows({}),
		}
	}
	componentWillMount() {
		cineplex.getMovieTheatres(this.state.movie.filmId).then((res) => {
			console.log(res);
			this.setState({
				theaters: ds.cloneWithRows(res)
			});
		});
	}
	render() {
		return (
			<View>
			<View>
				<Text>{this.state.movie.filmName}</Text>
			</View>
				<ListView
					enableEmptySections = {true}
					dataSource = {this.state.theaters}
					renderRow = {(theater) =>
						<TouchableOpacity>
							<View style={styles.theaterRow}>
								<Text style={styles.theaterName}>{theater.locationInteractiveName}</Text>
								<Text>{theater.city}</Text>
								<View>
								
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
	theaterRow: {
		backgroundColor: '#ffffff',
		margin: 10,
		padding: 20
	},
	theaterName: {
		fontSize: 20
	}
});