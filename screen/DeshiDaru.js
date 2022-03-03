import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image
} from "react-native";
export default class DeshiDaru extends Component {
render(){
  return(
    <View>
    <Image
              source={require("../app3.jpg")}
              style={{  width: 300,
    height: 400,
    }}
              
            />
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}>  </Text> 
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}>  </Text>     
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}>   Bobby Santra      750,180,90 ml</Text> 
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Tango Punch           750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Dr GM                 750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Badi Soff             750,180,90 ml</Text>
        <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}> Mango Fun          180,90 ml</Text> 
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Saku Santra            180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Bhingri            180 ml</Text>

       <TouchableOpacity
            style= {{height: 100,
    width: 100,
    justifyContent: "right",
    padding: 10,}}
            onPress={() => {
              this.props.navigation.navigate("FindScreen");
            
            }}
          >
            <Text style={{fontSize:15}}>Back</Text>
          </TouchableOpacity>

    </View>
  )
}
}