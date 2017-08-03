import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import App from './src/components/App';
import Weather from './src/components/Weather';
import TvDetail from './src/components/TvDetail';
import Movies from './src/components/Cineplex/Movies';
import Theatres from './src/components/Cineplex/Theatres';
import Bilibili from './src/components/Bilibili/Home';

const StackNav = StackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      title: 'TV'
    }
  },
  TvDetail: {
    screen: TvDetail,
    navigationOptions: {
      title: 'TvDetail'
    }
  },
})

const CineplexView = StackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      title: 'Cineplex Movie'
    }
  },
  Theatres: {
    screen: Theatres,
    navigationOptions: {
      title: 'Theatres'
    }
  }
});

const BilibiliView = StackNavigator({
  Home: {
    screen: Bilibili,
    navigationOptions: {
      title: 'Bilibili'
    }
  }
});

const AwesomeProject = TabNavigator({
  Weather: { 
    screen: Weather,
  },
  Movies: {
    screen: CineplexView,
    navigationOptions: {
      tabBarLabel: 'Cineplex'
    }
  },
  Bilibili: {
    screen: BilibiliView,
    navigationOptions: {
      tabBarLabel: 'Bilibili'
    }
  },
  App: { 
    screen: StackNav,
    navigationOptions: {
      tabBarLabel: 'TV',
    }   
  },
}, {
  tabBarPosition: 'bottom',
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#0F9C00',
    inactiveTintColor: '#999',
    indicatorStyle: { height: 0},
    style: {
      backgroundColor: '#fff',
    },
    labelStyle: {
      fontSize: 15,
    },
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
