import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import { Input,Icon } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class Payment extends React.Component{
    render(){
        return(
            <View>
                    <Image></Image>
                <View>
                    <Text>Payment Coming soon</Text>
                </View>
            </View>
        )
    }
}