import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeScreen from './screen/welcomecreen';
import FindScreen from './screen/FindScreen'
import AddItem from './screen/AddItem'
import DeshiDaru from './screen/DeshiDaru'

export default class App extends Component {
  render(){
    return (
      <AppContainer/>
    );
}
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  FindScreen:{screen: FindScreen},
  AddItem:{screen: AddItem},
  DeshiDaru:{screen:DeshiDaru}

})

const AppContainer =  createAppContainer(switchNavigator);