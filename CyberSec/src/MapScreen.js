/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, FlatList,ListItem, View} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component{
    constructor(props) {
        super(props);
        
        
	}
    
        location={'lon':19,'lat':47}
       
    render() {


       
        return (
           
            <View style={styles.container}>
            
                <MapView style={styles.map}
                    initialRegion={{
                    latitude:  47.497912,
                    longitude:19.040235,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
            </View>
          
           
        );
    }
}




const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
    