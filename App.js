/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */



// import React, {AppRegistry} from 'react-native';
// import App from './src/containers/app';


// AppRegistry.registerComponent('App', () => App);


// ++++++++++++++++++++++++++++++++++++++++



// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   AsyncStorage,
//   Button,
//   TextInput,
//   Keyboard,
//   Platform
// } from "react-native";

// const isAndroid = Platform.OS == "android";
// const viewPadding = 10;

// export default class TodoList extends Component {
//   state = {
//     tasks: [],
//     text: ""
//   };

//   changeTextHandler = text => {
//     this.setState({ text: text });
//   };

//   addTask = () => {
//     let notEmpty = this.state.text.trim().length > 0;

//     if (notEmpty) {
//       this.setState(
//         prevState => {
//           let { tasks, text } = prevState;
//           return {
//             tasks: tasks.concat({ key: tasks.length, text: text }),
//             text: ""
//           };
//         },
//         () => Tasks.save(this.state.tasks)
//       );
//     }
//   };

//   deleteTask = i => {
//     this.setState(
//       prevState => {
//         let tasks = prevState.tasks.slice();

//         tasks.splice(i, 1);

//         return { tasks: tasks };
//       },
//       () => Tasks.save(this.state.tasks)
//     );
//   };

//   componentDidMount() {
//     Keyboard.addListener(
//       isAndroid ? "keyboardDidShow" : "keyboardWillShow",
//       e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
//     );

//     Keyboard.addListener(
//       isAndroid ? "keyboardDidHide" : "keyboardWillHide",
//       () => this.setState({ viewPadding: viewPadding })
//     );

//     Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
//   }

//   render() {
//     return (
//       <View
//         style={[styles.container, { paddingBottom: this.state.viewPadding }]}
//       >
//         <FlatList
//           style={styles.list}
//           data={this.state.tasks}
//           renderItem={({ item, index }) =>
//             <View>
//               <View style={styles.listItemCont}>
//                 <Text style={styles.listItem}>
//                   {item.text}
//                 </Text>
//                 <Button title="X" onPress={() => this.deleteTask(index)} />
//               </View>
//               <View style={styles.hr} />
//             </View>}
//         />
//         <TextInput
//           style={styles.textInput}
//           onChangeText={this.changeTextHandler}
//           onSubmitEditing={this.addTask}
//           value={this.state.text}
//           placeholder="Add Tasks"
//           returnKeyType="done"
//           returnKeyLabel="done"
//         />
//       </View>
//     );
//   }
// }

// let Tasks = {
//   convertToArrayOfObject(tasks, callback) {
//     return callback(
//       tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
//     );
//   },
//   convertToStringWithSeparators(tasks) {
//     return tasks.map(task => task.text).join("||");
//   },
//   all(callback) {
//     return AsyncStorage.getItem("TASKS", (err, tasks) =>
//       this.convertToArrayOfObject(tasks, callback)
//     );
//   },
//   save(tasks) {
//     AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//     padding: viewPadding,
//     paddingTop: 20
//   },
//   list: {
//     width: "100%"
//   },
//   listItem: {
//     paddingTop: 2,
//     paddingBottom: 2,
//     fontSize: 18
//   },
//   hr: {
//     height: 1,
//     backgroundColor: "gray"
//   },
//   listItemCont: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between"
//   },
//   textInput: {
//     height: 40,
//     paddingRight: 10,
//     paddingLeft: 10,
//     borderColor: "gray",
//     borderWidth: isAndroid ? 0 : 1,
//     width: "100%"
//   }
// });

// AppRegistry.registerComponent("TodoList", () => TodoList);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import React, { Component } from 'react';
// import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
// import ListItem from './src/components/ListItem';
// import { connect } from 'react-redux';
// import { addPlace , removePlace, toggleTodo } from './src/actions/place';

// class App extends Component {
  
//   state = {
//     placeName: '',
//     places: []
//   }
  
//   placeSubmitHandler = () => {
//     if(this.state.placeName.trim() === '') {
//       return;
//     }
//     this.props.add(this.state.placeName);
//     // remove after click Add
//     this.setState({
//       placeName:''
//     });
//   }
  
//   delItem = (item) => {
//     this.props.remove(item)
//   }
//   isDone = (itemId) =>{
//     console.log(this.state,'fsdfdsf');
//     this.props.done(itemId)
//   }
  
//   placeNameChangeHandler = (value) => {
//     this.setState({
//       placeName: value
//     });    
//   }
  
//   placesOutput = () => {
//     return (
//       <FlatList style = { styles.listContainer }
//       data = { this.props.places }
//       keyExtractor={(item, index) => index.toString()}
//       renderItem = { info => (
//         <ListItem 
//         isDone = {this.isDone}
//         delItem = {this.delItem}
//         completed = {info.item.completed}
//         placeId = { info.item.key}
//         placeName={ info.item.value }
//         />
//         )}
//         />
//         )
//       }
      
//       render() {
//         return (
//           <View style={ styles.container }>
//       <View style = { styles.inputContainer }>
//         <TextInput
//           placeholder = "Search Places"
//           style = { styles.placeInput }
//           value = { this.state.placeName }
//           onChangeText = { this.placeNameChangeHandler }
//           ></TextInput>
//         <Button title = 'Add' 
//           style = { styles.placeButton }
//           onPress = { this.placeSubmitHandler }
//           />
//         </View>
//         <View style = { styles.listContainer }>
//           { this.placesOutput() }
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%'
//   },
//   placeInput: {
//     width: '70%'
//   },
//   placeButton: {
//     width: '30%'
//   },
//   listContainer: {
//     width: '100%'
//   }
// });

// const mapStateToProps = state => {
  
//   return {
//     places: state.places.places
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (name) => {
//       dispatch(addPlace(name))
//     },
//     remove: (placeId) => {
//       dispatch(removePlace(placeId))
//     },
//     done: (placeId) => {
//       console.log({placeId});
      
//       dispatch(toggleTodo(placeId))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




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

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });



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
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
