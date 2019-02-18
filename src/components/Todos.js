// ListItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const ListItem = (props) => {

    export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        
    }
   
    render(){
            return (

        );
    }
}

const styles = StyleSheet.create({
  
});



import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './src/components/ListItem';
import { connect } from 'react-redux';
import { addPlace , removePlace, toggleTodo } from './src/actions/place';

class Todos extends Component {
  
  state = {
    placeName: '',
    places: []
  }
  
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
    // remove after click Add
    this.setState({
      placeName:''
    });
  }
  
  delItem = (item) => {
    this.props.remove(item)
  }
  isDone = (itemId) =>{
    console.log(this.state,'fsdfdsf');
    this.props.done(itemId)
  }
  
  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });    
  }
  
  placesOutput = () => {
    return (
      <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
        isDone = {this.isDone}
        delItem = {this.delItem}
        completed = {info.item.completed}
        placeId = { info.item.key}
        placeName={ info.item.value }
        />
        )}
        />
        )
      }
      
      render() {
        return (
          <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Search Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
          ></TextInput>
        <Button title = 'Add' 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
          />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

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

const mapStateToProps = state => {
  
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    },
    remove: (placeId) => {
      dispatch(removePlace(placeId))
    },
    done: (placeId) => {
      console.log({placeId});
      
      dispatch(toggleTodo(placeId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)