// ListItem.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import CallLogs from 'react-native-call-log';

// // fetch call logs data

// CallLogs.show((logs) =>{
//  // parse logs into json format
//   const parsedLogs = JSON.parse(logs);
//   console.log({parsedLogs});
  
//  // logs data format

// });

export default class Vod extends React.Component {
    static navigationOptions = {
            title: 'CAll'
        };

        state = {
            
        }
        
 
        
        
        render(){
            
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Call</Text>

                   
                  
                

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