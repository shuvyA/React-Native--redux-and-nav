// ListItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const ListItem = (props) => {

    export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log({ props });
        
    }
   
    render(){
            return (
        <TouchableOpacity onPress ={()=>{this.props.isDone(this.props.placeId)}}>
            <View style = { this.props.completed ? styles.listItemDone :styles.listItem }>
            <Text >{ this.props.placeName } </Text>
            <Text onPress ={()=>{
              this.props.delItem( this.props.placeId )  
            }  }>×</Text>
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#eee',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItemDone: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
      flex: 1,
      flexDirection: 'row',
    justifyContent: 'space-between', 
      backgroundColor: 'blue'

  }
});

// export default ListItem;