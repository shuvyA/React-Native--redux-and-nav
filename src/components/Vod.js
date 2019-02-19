// ListItem.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';

// const ListItem = (props) => {

// YouTubeStandaloneAndroid.playVideo({
//         apiKey: 'AIzaSyA6XPQr3DPh1yc5SfrLy0dw29KxsRJA4ss',     // Your YouTube Developer API Key
//         videoId: 'VfIJSc6KWWk',     // YouTube video ID
//         autoplay: true,             // Autoplay the video
//         startTime: 120,             // Starting point of video (in seconds)
//       })
//         .then(() => console.log('Standalone Player Exited'))
//         .catch(errorMessage => console.error(errorMessage))


    export default class Vod extends React.Component {
        static navigationOptions = {
            title: 'VOD'
          };

          state = {
        
          }
   
    render(){
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>VOD</Text>

                    <YouTube
                    apiKey= 'AIzaSyA6XPQr3DPh1yc5SfrLy0dw29KxsRJA4ss'
                    videoId="VfIJSc6KWWk"   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended
 
                     onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
 
                    style={{ alignSelf: 'stretch', height: 300 }}
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