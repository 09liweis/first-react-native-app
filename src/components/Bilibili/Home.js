import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import VideoList from './VideoList';

import bilibili from '../../services/Bilibili';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRefreshing: false,
			data: {
				douga: ds.cloneWithRows([]),
				bangumi: ds.cloneWithRows([])
			}
		};
	}
	componentWillMount() {
		this.getHomePage();
	}
	getHomePage() {
		bilibili.getHomePage().then((res) => {
			this.setStates(res);
		});
	}
	setStates(res) {
		var data = {};
		Object.keys(res).map((section) => {
			if (typeof res[section] == 'object') {
				var dataSource = ds.cloneWithRows(res[section]);
				data[section] = dataSource;
			}
		});
		this.setState({
			isRefreshing: false,
			data: data
		});
	}
	_onRefresh() {
		this.setState({isRefreshing: true});
		this.getHomePage();
	}
	render() {
		const list = Object.keys(this.state.data).map((key) => {
			var section = this.state.data[key];
			return (
				<VideoList list = {section} key={key} title={key} />
			);
		});
		return (
			<ScrollView 
				style={styles.container}
				refreshControl={
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh={this._onRefresh.bind(this)}
						tintColor="#ff0000"
			            title="Loading..."
			            titleColor="#00ff00"
			            colors={['#ff0000', '#00ff00', '#0000ff']}
			            progressBackgroundColor="#ffff00"
					/>
				}>
				{list}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	constiner: {
		flex: 1
	}
});