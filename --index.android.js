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
  View
} from 'react-native';

export default class patient_tracking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Button
// } from 'react-native';
// import {
//   StackNavigator
// } from 'react-navigation';
// // import Home from './App/components/Home';
// import AddPatient from './App/containers/AddPatient.js';
// import ShowPatient from './App/containers/ShowPatient.js';
// import Home from './App/components/Home.js';
// import { TabNavigator } from "react-navigation";

// import * as firebase from 'firebase';


// const config = {
//   apiKey: "AIzaSyDv1h8FRU0n5Fv6RLRjeiTxCXTKmP17204",
//   authDomain: "patient-tracking-react-native.firebaseapp.com",
//   databaseURL: "https://patient-tracking-react-native.firebaseio.com",
//   projectId: "patient-tracking-react-native",
//   storageBucket: "patient-tracking-react-native.appspot.com",
//   messagingSenderId: "1020374719486"
// };
// firebase.initializeApp(config);




// export default class App extends Component {

//   static navigationOptions = {
//     title: 'Home',
//   };
//   // showPatNav () {
//   //   this.props.navigation.navigate('ShowPatient');
//   // }
//   render() {

//     const { navigate } = this.props.navigation;
//     return (
      
//       <View>
//            <Home addPatNav={() => navigate('AddPatient')} />
//       </View>
//     );
//   }
// }

// const MainScreenNavigator = TabNavigator({

//   Home: { screen: App },
//   AddPatient: { screen: AddPatient },
//   YourPatient: { screen: ShowPatient },
// });

// const PrimaryNavigation = StackNavigator({
//   // Home: {screen: App},
//   Home: {screen: MainScreenNavigator},
//   AddPatient: {screen: AddPatient},
//   ShowPatient: {screen: ShowPatient}
// })

AppRegistry.registerComponent('patient_tracking', () => patient_tracking);
