/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text,Button, FlatList,ListItem, View} from 'react-native';
import MapScreen from './MapScreen'

import * as services from './services/service'

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
       this.state={
           listdata:[{title: 'Title Text', key: 'item1'},{title: 'Title Text', key: 'item3'},{title: 'Title Text', key: 'item2'}],
            loading:true
        }
       this.d=[]
        
    }
    
    
    componentDidMount(){
        services.GetData()
        .then(result=>this.setState({listdata:result}))
        .then(()=>this.setState({loading:false}))
        .catch(err=>console.log(err))
    }

    onPress(){
        
       console.log(this.state.listdata)
        

        
    }
    
    render() {


       
        return (
            <View style={styles.container}>
            
            
            {/* <MapScreen style={styles.map}/> */}

            <Button title="PushMe" onPress={this.onPress}>Push Me</Button>
            <FlatList
            
                data={this.state.listdata}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
                renderItem={({item}) => <View style={styles.listItem}> 
                                             <Text  style={styles.titleText} > {item.name}</Text>
                                             <Text> ID: {item.id}      {item.description}  </Text>
                                             <Text> {((Date.now()-new Date(item.created).valueOf())/3600000).toFixed(0)} minutes ago </Text>
                                        </View>}

                />
            
          </View>
        );
    }
}



const styles = StyleSheet.create({
container: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    
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
    height:300
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator:{
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginRight: "14%"
  },
  listItem:{
      padding:10

  }
});
