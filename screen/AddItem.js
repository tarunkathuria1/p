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
export default class FindScreen extends Component {
render(){
  return(
    
    <View>
    <Image
              source={require("../app2.jpg")}
              style={{  width: 250,
    height: 200,
    }}
              
            />
      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

      <TextInput
        style={{
          height: 35,
          borderColor: 'white',
          borderWidth: 1
        }}
          placeholder="Add an item..."
      />

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
  );
}
}