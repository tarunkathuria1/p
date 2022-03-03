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
    <ScrollView> 
       <Image
              source={require("../app.jpg")}
              style={{  width: 250,
    height: 200,
    }}
              
            />
            
     <Text
          style={{justifyContent:'center',
   alignSelf:'center',
   fontSize:40,
   color:'brown',
   margin:30}}
          >Jyoti Wine Shop</Text>
          <View style={{   display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"}}>

<TouchableOpacity
            style= {{height: 100,
    width: 100,
   display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
    padding: 10,}}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
            
            }}
          >
            <Text style={{fontSize:15},{justifyContent: "right"},{padding: 10},{right:100}}>Log Out</Text>
          </TouchableOpacity>
          </View>
           <Text
          style={{justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#fb5b5a'}}
          >Available Brand's </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}> 100 Piper Whisky                750,375,180 ml</Text> 
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> 100 Piper Whisky 12 Yr            750 ml</Text>
       <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> 100 Piper Whisky 8 Yr            180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> 8 P.M                             1000,750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Antiquity           2000,1000,750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> B.P.Gold Whisky           1000,750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Black            750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Limon            750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Pineapple        750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Superior         750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Ballantiness Finest Sch        750,200 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black & White             750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black Dog Centenari       750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black Dog Schotch         750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Blender Pride Res         750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Blender Pride    2000,1000,750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Camino Real Tequila                     750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Chivas Regal Schotch                     750,200,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> DGP 007 Whisky                          1000 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Director SP. Black Whisky      2000,1000,750 </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text> 
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Director SP.Whisky                   750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Doctor Brandy                        750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Glenfiddich 12 Yr Scotch Wh           700,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Goa Dry Gin             750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Canberry Vodka    750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Mango Vodka          750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Melon Vodka          750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Gray Groose Vodka               750,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Imperial Blue Whisky         2000,1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> J & B Rare Scotch Whisky    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Black Label               750,200,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> JW Double Black Label      750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Red Label        750,375,200,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Blue Label       750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Jack Daniel Black     750,375,200,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Jack Daniel Honey     750,200,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Jaiselmer Carf Indian Gin    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Apple Vodka  750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Choclate Vodka    750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Orange Vodka   750,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Lemon Vodka   750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Canberry Vodka   750,180 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Plain Vodka  750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mansion House French Brandy  375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Maqintosh Silver Whisky   750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Master Blend Whisky   750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells Celebration Rum  1000,750,375</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Whisky  2000,1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Luxury Prem  750,375,180 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Platinum Whisky  750,375</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Morpheus Blue Brandy     750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Oaksmith Gold Inter Blend   750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Oaksmith Gold Whisky        750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Officer Choice Blue Pure Gain    1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>      
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Officer Choice Whisky    1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Old Monk Legend Rum   750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Old Monk Rum  1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Papa 888 Whisky      1000,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rock Ford Reserve    750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rock Ford Classic Balned Whisky  750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}>  375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Romanov Vodka      750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Romanov Vodka Apple      180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Challenge Whisky     2000,1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Stag Barrel   750,375,180,90</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Stag Whisky  2000,1000,750</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sagar Samrat Whisky   1000,180 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Signature P Grain     750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Signature Whisky      2000,1000,750 </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> 375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Vodka   750,375,180,90 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Apple Twist 750,180 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Orange Twist  750,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Simronoff Vanilla Twist  750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sterling Reserve B-10   750,375,180,90 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Sterling Reserve B-7   750,375,180,90</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Teacher 50 Scotch    750,375,180,60 </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Teacher H.L. Cream Whisky  750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Vat 69 Whisky      750,375,180,60 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> White Mischief Vodka    750,180,50 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> William Lawson Scotch    750,375,180 ml</Text>
      <Text style={{height: 65, borderColor: 'white', borderWidth: 1,fontSize:40, color:"orange"}}> Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Amstel Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Beck Ice Strong Beer    </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Budweiser Strong Beer    650,500 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Budweiser Mild Beer     650,500 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Carlsberg Strong Beer     650,500 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Carlsberg Mild Beer   650 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Corona Beer       330 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Khajuraho Strong Beer     650,330 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Strong Beer    650,500,330 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Storm Strong     650 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Classic Strong    650 ml </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Strong   650,500,330 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Strong White   500 ml</Text>
      <Text style={{height: 65, borderColor: 'white', borderWidth: 1,fontSize:40, color:"orange"}}> Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Black Berry    275 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Canberry       275 ml< /Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Jamaican       275 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Defizza Strong Spar.Red W.    375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> G.9 Red Wine    750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> G9 Plus    375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Resvera Lite Jamun    750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Reserve Pure Jamun     750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Fizzy White Wine  375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Spritzer Canberry  375 ml  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Strong Extra       375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Strong Fizzy        750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Seven Peaks Port Strong 7000 Wine 750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Brut Tropical     750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Cabernet RW    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Cabernet Shiraz Red Wine   375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Port 1000 Wine   750,375,180 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Satori Red Wine    750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Seco Methode Classic   750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Vineyards Zinfandel   750,375 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Yellow Tail Chardonaay    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Yellow Tail Shiraz    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Madir Red    750 ml</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Madir White    750 ml</Text>





 

          <TouchableOpacity
            style= {{height: 100,
    width: 100,
    justifyContent: "right",
    padding: 5,}}
            onPress={() => {
              this.props.navigation.navigate("AddItem");
            
            }}
          >
            <Text style={{fontSize:15}}>Add Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style= {{height: 100,
    width: 100,
    justifyContent: "right",
    padding: 10,}}
            onPress={() => {
              this.props.navigation.navigate("DeshiDaru");
            
            }}
          >
            <Text style={{fontSize:15}}>Deshi Daru</Text>
          </TouchableOpacity>



          
    </ScrollView>
    </View>
    
  );
}
}