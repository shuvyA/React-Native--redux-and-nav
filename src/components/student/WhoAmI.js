// ListItem.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

// const ListItem = (props) => {
    
    
    export default class WhoAmI extends React.Component {
        static navigationOptions = {
            title: 'Who am i'
            
        };

        state = {
            person: ''
        }

        constructor(props) {
            super(props);
            //    this.getApi = this.getApi.bind(this)
        }
        

        
        
        render(){
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Who am i</Text>
                    <Button></Button>
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
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
});