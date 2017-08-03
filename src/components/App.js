import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, ListView, Image } from 'react-native';
import tv from '../services/tv';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			results: ds.cloneWithRows([]),
			page: 0
		}
	}

	componentWillMount() {
		tv.getPopular().then((res) => {
			this.setState({
				results: ds.cloneWithRows(res.results),
				page: res.page
			})
		});
	}

  render() {
  	//console.log(this.state.results);
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
        	enableEmptySections = {true}
        	dataSource = {this.state.results}
        	renderRow = {(tv) =>
        		<TouchableOpacity onPress = {() => navigate('TvDetail')}>
	        		<View style={styles.row} >
	        			<Image source={{uri: 'https://image.tmdb.org/t/p/w500' + tv.poster_path}}
	        			style={{width: 100, height: 200}}
	        			/>
	        			<View style={{marginLeft: 20}}>
	        				<Text>{tv.name}</Text>
	        				<Text>{tv.first_air_date}</Text>
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
    backgroundColor: '#F8FCFF',
    paddingTop: 10,
  },
  row: {
  	flex: 1,
  	flexDirection: 'row'
  }
});