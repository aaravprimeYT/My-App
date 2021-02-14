import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import { Input,Icon } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase'
import db from '../config'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
            address:"",
        }
    }

    userLogin = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
            this.props.navigation.navigate("Selection")
        }).catch(error => {
                var errorCode = error.error
                var errorMessage = error.Message
                Alert.alert("Your EmailID/Password Is Wrong")
            })
    }

    goToSignUp = () => {
        this.props.navigation.navigate("Screen")
        console.log("hello")
    }


    render(){
        return(
            <View style={{marginTop:200}}>
                <Image></Image>
                <View>
                    <Input
                        placeholder='Email'
                        keyboardType="email-address"
                        onChangeText={(text) => {this.setState({emailId:text})}}
                        leftIcon={
                    <Icon
                        name='email'
                        size={24}
                        color='black'
                    />
                        }
                    />
                    <Input
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text) => {this.setState({password:text})}}
                        leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type="font-awesome"
                    />
                        }
                    />
                    <Input
                        placeholder='Address'
                        onChangeText={(text) => {this.setState({address:text})}}
                        leftIcon={
                    <Icon
                        name='location-pin'
                        size={24}
                        color='black'
                        type="Entypo"
                    />
                        }
                    />
                 </View>
                 <View>
                    <TouchableOpacity style={styles.button} onPress={() => {this.userLogin(this.state.emailId,this.state.password)}}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => {this.goToSignUp()}}><Text style={styles.buttonText}> Don't Have an Account? Click Here</Text></TouchableOpacity>
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#35c3ff",
        shadowColor: "#000",
        marginBottom: RFValue(30),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        alignSelf:'center',
        marginTop:100
      },
      buttonText: {
        color: "black",
        fontWeight: "200",
        fontSize: RFValue(14),
      },
      button2: {
        width: "80%",
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
        alignSelf:'center'
      }
})
