// ListItem.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const ListItem = (props) => {

    export default class Home extends React.Component {
        static navigationOptions = {
            title: 'Home'
            
          };
   
    render(){
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>HOME</Text>
                    <Text>MATRIX</Text>
                    <Button
                     title="Go to Todos"
                     onPress={() => this.props.navigation.navigate('Todos')}
                     />
                    <Button
                     title="Go to Youtube"
                     onPress={() => this.props.navigation.navigate('Vod')}
                     />
                

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
});