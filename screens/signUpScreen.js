import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import { Input,Icon } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase'
import db from '../config'

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
            address:"",
            confirmPassword:"",
            firstName:"",
            lastName:"",
        }
    }

    userSignUp = (email,password,confirmPassword) => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords Do Not Match")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {
                db.collection("users").add({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    address: this.state.address,
                    emailId: this.state.emailId
                })
                this.props.navigation.navigate("Selection")
            })
        }
    }

    render(){
        return(
            <View style={{marginTop:100}}>
                <Image></Image>
                <View>
                <Input
                        placeholder='Email'
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
                        placeholder='Confirm Password'
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
                    <TouchableOpacity style={styles.button} onPress={() => {this.userSignUp(email,password,confirmPassword)}}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => {this.props.navigation.navigate("Login")}}><Text style={styles.buttonText}> Already Have an Account? Click Here</Text></TouchableOpacity>
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
        marginTop:10
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




