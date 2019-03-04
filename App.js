/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */



import React, {Component} from 'react';
import Todos from './src/components/Todos';
import Home from './src/components/Home';
import Vod from './src/components/Vod';
import Call from './src/components/Call';
import WhoAmI from './src/components/student/WhoAmI';
import Api from './src/components/student/Api';
import { StyleSheet,Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Vod: Vod,
    WhoAmI: WhoAmI,
    Api:  Api,
    Call:  Call,
    Todos: Todos
  },
  {
    initialRouteName: "Home"
  }
  );
  class App extends Component {
    
    
    render() {
      return <AppContainer />;
    }
  }
  // export default createAppContainer(AppNavigator);
  
  export default createAppContainer(AppNavigator);
