import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import { Input,Icon } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class Selection extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                    <Image></Image>
                <View>
                    <TouchableOpacity style={[styles.button,{marginTop:100}]} onPress={() => {this.props.navigation.navigate("Item")}}><Text>Hydro Dip</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("Clothes")}}><Text>Tie-Dye</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#35c3ff",
        shadowColor: "#000",
        marginBottom: RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        alignSelf:'center',
        marginTop:50
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20),
      }
})