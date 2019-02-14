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
        <TouchableOpacity>
            <View style = { styles.listItem }>
            <Text>{ this.props.placeName } </Text>
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
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// export default ListItem;