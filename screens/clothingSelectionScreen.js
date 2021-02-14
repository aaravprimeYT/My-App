import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,FlatList } from 'react-native';
import { Input,Icon,ListItem,Avatar } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config'

const list = [
    {
      name: 'Polo Shirt',
      image:require("../assets/iphone.png"),
      subtitle:"5 ruppee"
    },
    {
      name: 'Hoodie',
      image:require("../assets/xbox-controller.png"),
      subtitle:"5 ruppee"
    },
    {
      name: 'T-Shirt',
      image:require("../assets/ps4-controller.png"),
      subtitle:"5 ruppee"
    },
    {
      name: 'Shorts',
      image:require("../assets/ps4-controller.png"),
      subtitle:"10 ruppee"
    },
    {
      name: 'Skirt',
      image:require("../assets/ps4-controller.png"),
      subtitle:"10 ruppee"
      },
    {
      name: 'Socks',
      image:require("../assets/ps4-controller.png"),
      subtitle:"10 ruppee"
    },
    {
      name: 'Shirt',
      image:require("../assets/ps4-controller.png"),
      subtitle:"10 ruppee"
    },
    {
      name: 'Scarf',
      image:require("../assets/ps4-controller.png"),
      subtitle:"10 ruppee"
    },

  ]

export default class Clothes extends React.Component{

   
  addItem = (item) => {
    console.log(item)
    db.collection("items").add({
      itemName:item.name,
      itemImage:item.image,
      itemPrice:item.subtitle,
      itemStatus:"notPurchased"
    })
    Alert.alert("Item Added to The Cart")
  }

      keyExtractor = (item, index) => index.toString()
      
      renderItem = ({ item }) => (
        <View>
          <ListItem bottomDivider >
          <Avatar title={"I-Phone Case"} source={item.image}/>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <TouchableOpacity onPress={() => {
            this.addItem(item)
          }}><Text>Add To Cart</Text></TouchableOpacity>
        </ListItem>
        </View>
        
      )
      
      render () {
        return (
          <View>
            <Image></Image>
            <View style={{alignItems:'left', marginLeft:20, marginBottom:20, marginTop:50}}>
            <Icon name="arrow-left" type="feather" onPress={() => {this.props.navigation.navigate("Selection")}}></Icon>
            </View>
            <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
          <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("HydroColor")}}><Text style={styles.buttonText}>Select Colors</Text></TouchableOpacity>
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
        marginTop:50
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