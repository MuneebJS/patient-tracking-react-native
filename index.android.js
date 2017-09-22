/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
// import Home from './App/components/Home';
import AddPatient from './App/containers/AddPatient.js';
import ShowPatient from './App/containers/ShowPatient.js';
import Home from './App/components/Home.js';
import { TabNavigator } from "react-navigation";

import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDv1h8FRU0n5Fv6RLRjeiTxCXTKmP17204",
  authDomain: "patient-tracking-react-native.firebaseapp.com",
  databaseURL: "https://patient-tracking-react-native.firebaseio.com",
  projectId: "patient-tracking-react-native",
  storageBucket: "patient-tracking-react-native.appspot.com",
  messagingSenderId: "1020374719486"
};
firebase.initializeApp(config);

console.disableYellowBox = true;


export default class App extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  // showPatNav () {
  //   this.props.navigation.navigate('ShowPatient');
  // }
  render() {

    const { navigate } = this.props.navigation;
    return (
      
      <View>
           <Home addPatNav={() => navigate('AddPatient')} showPatNav={() => navigate('ShowPatient')} />

             {/* <Text>Hll</Text> */}
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({

  Home: { screen: App },
  AddPatient: { screen: AddPatient },
  YourPatient: { screen: ShowPatient },
});

const PrimaryNavigation = StackNavigator({
  // Home: {screen: App},
  Home: {screen: MainScreenNavigator},
  AddPatient: {screen: AddPatient},
  ShowPatient: {screen: ShowPatient}
})

// AppRegistry.registerComponent('project0', () => PrimaryNavigation);
AppRegistry.registerComponent('patient_tracking', () => PrimaryNavigation);

