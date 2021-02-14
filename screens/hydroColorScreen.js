import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,FlatList } from 'react-native';
import { Input,Icon,ListItem,Avatar } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

const list = [
    {
      name: 'Red',
      image:require("../assets/iphone.png"),
      subtitle:"5 ruppee"
    },
    {
      name: 'bubblegum pink',
      image:require("../assets/xbox-controller.png"),
      subtitle:"5 ruppee"
    },
    {
      name: 'Green',
      image:require("../assets/ps4-controller.png"),
      subtitle:"5 ruppee"
    }

  ]

export default class HydroColor extends React.Component{

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
          <Avatar title={"Colors"} source={item.image}/>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <TouchableOpacity><Text>Add To Cart</Text></TouchableOpacity>
        </ListItem>
        </View>
        
      )
      
      render () {
        return (
          <View>
            <Image></Image>
            <View style={{alignItems:'left', marginLeft:20, marginBottom:20, marginTop:50}}>
            <Icon name="arrow-left" type="feather" onPress={() => {this.props.navigation.navigate("Item")}}></Icon>
            </View>
          <View>

            <FlatList
              keyExtractor={this.keyExtractor}
              data={list}
              renderItem={this.renderItem}
            />
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Check Cart</Text></TouchableOpacity>
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