import React,{Component} from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navi from './components/Navi';
import Bue from './components/Bue';


const Snack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Snack.Navigator initialRouteName='Home'>
          <Snack.Screen 
          name='Home' 
          component={Navi} 
          options={{title:"moises",
        headerStyle:{
          backgroundColor:'#ff00ff'
        },
        headerTintColor:'#fff',
        headerRight: () => (
         
          
          
           
            <Button
          title="Info"
          onPress={() => alert()}
            color="#00cc00"
          /> 
         
          
          )
        
        
        }}
          />
          <Snack.Screen name='Bue' component={Bue} />
        </Snack.Navigator>
      </NavigationContainer>
    )
  }
}


