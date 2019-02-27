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
                     style = {styles.btn}
                     title="Go to Todos"
                     onPress={() => this.props.navigation.navigate('Todos')}
                     />
                     <View style = {styles.btn}>
                    <Button
                     title="Go to Youtube"
                     onPress={() => this.props.navigation.navigate('Vod')}
                     />
                     </View>
                     <View style = {styles.btn}>
                     <Button
                     style = {styles.btn}
                     title="WhoAmI"
                     onPress={() => this.props.navigation.navigate('WhoAmI')}
                     />    
                     </View>
                     <View style = {styles.btn}>
                     <Button
                     style = {styles.btn}
                     title="API"
                     onPress={() => this.props.navigation.navigate('Api')}
                     />    
                     </View>
                     
                     <View style = {styles.btn}>
                     <Button
                     style = {styles.btn}
                     title="CALL"
                     onPress={() => this.props.navigation.navigate('Call')}
                     />    
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
      btn:{
          paddingTop:20
      }
});