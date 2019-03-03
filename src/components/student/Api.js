// ListItem.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

// const ListItem = (props) => {
    
    export default class WhoAmI extends React.Component {
        static navigationOptions = {
            title: 'Api'
        };

        state = {
            person: ''
        }

        constructor(props) {
            super(props);
            //    this.getApi = this.getApi.bind(this)
        }
        
          yesAndNo =  () => {
            return axios.get('https://yesno.wtf/api')
               .then(res => {
                  return res.data.answer;
               })
               .catch(err => {
                 console.log('error axios:::',err);
                 return err;
               } )
           }

        getApi = async () => {
            const res = await this.yesAndNo();
            await this.setState({
                person: res
              });
            return await res;
        }
        
        //   https://yesno.wtf/api/
        render(){
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>HOME</Text>
                    <Text>{this.state.person? this.state.person: 'no axios'}</Text>
                    <Button
                     title="Go to Todos"
                     onPress={() => this.props.navigation.navigate('Todos')}
                     />
                    <Button
                     title="Go to Youtube"
                     onPress={() => this.props.navigation.navigate('Vod')}
                     />
                    <Button
                     title="axios"
                     onPress={() =>  this.getApi()}
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