import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from './screens/loginScreen'
import Selection from './screens/selectionScreen'
import Cart from './screens/cartScreen'
import Design from './screens/designScreen'
import AddCard from './screens/addCardScreen'
import Clothes from './screens/clothingSelectionScreen'
import HydroColor from './screens/hydroColorScreen'
import Item from './screens/itemSelectionScreen'
import Payment from './screens/paymentScreen'
import SignUp from './screens/signUpScreen'
import Thank from './screens/thankScreen'
import TyeColor from './screens/tyeColorScreen'
import Screen from './screens/screen'


export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Login:{
    screen:Login
  },
  Screen:{
    screen:Screen
  },
  SignUp:{
    screen:SignUp
  },
  Selection:Selection,
  Item:{
    screen:Item
  },
  Clothes:{
    screen:Clothes
  },
  HydroColor:HydroColor,
  Cart:Cart,
  Payment:Payment,
  AddCard:AddCard,
  Thank:Thank,
  TyeColor:TyeColor,
  Design:Design
})

const AppContainer = createAppContainer(AppNavigator)