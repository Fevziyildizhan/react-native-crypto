import React, { Component, useEffect, useState, useCallback } from 'react';
import { View,Button,Text,FlatList,RefreshControl,Image,ToastAndroid,TextInput} from 'react-native';
import axios from 'axios';
import _ from "lodash"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

import { globalStyles } from './AppStyle';

import Home from './Home';
import Crypto from './Crypto';

const Stack = createStackNavigator()

function App() {

/* const Home = ({navigation}) =>{

  const onPressHandler = () =>{
    navigation.navigate("Crypto")
   
  }

   return (
     <View>
        <Text>Home</Text>
      <Button title ="Go Crypto" onPress = {onPressHandler} /> 
     </View>
     
   )
 }*/


 /*const Crypto = ({navigation}) =>{
  const [data,setData] = useState([])
  const [search , setSearch] = useState("")
  const [refreshing, setRefreshing] = useState(false);
   
 
  useEffect( () =>{
    getData()
  },[])

   const getData = () =>{
    setRefreshing(true)
     const BASE_URL = "https://api.coingecko.com/api/v3/"
    axios.get(BASE_URL +"coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(res =>{
      setData(res.data)
      
     
     // console.log(res.data)
      setTimeout(() =>{
        setRefreshing(false)
        ToastAndroid.show('2 DAKİKADA BİR YENİLE', ToastAndroid.SHORT);
      },2000)
    }).catch(err =>{
      console.log(err)
    })
   }
  
    const filterData = search 
    ? data.filter(item => {
      const itemData = item.name.toUpperCase()
      const searchData = search.toUpperCase()
      return itemData.indexOf(searchData) > -1
    }) 
    :data
    
    const fgf = _.sortBy(filterData ,["name", "total_volume"])
     console.log(fgf)

    
    const onPressHandler = () =>{
      navigation.navigate("Home")
    }


   const _renderItem = ({item}) => {
    return(
      <View>
        <Image style = {globalStyles.img} source = {{uri : item.image}} />
        <Text style = {globalStyles.text}> name : {item.name}</Text>
        <Text style = {globalStyles.symbol}> sembol : {item.symbol}</Text>
        <Text> Güncelenen saat : {Date(item.last_updated)}</Text>
        <Text>toplam tutar : {item.total_volume.toLocaleString()}</Text>
        <Text> son 24 saatte kar : {item.price_change_percentage_24h.toFixed(2)}%</Text>
      </View>
    )
  }
 
 
  
  return (
  <View style={globalStyles.container}>
    <TextInput placeholder = "Type Here..." value = {search} onChangeText = {(search) => setSearch(search)}  />
     <FlatList
           data = {fgf}
           extraData = {search}
           keyExtractor = {(index) =>index.id}
            refreshControl = {
              <RefreshControl
              progressBackgroundColor = {"red"}
              progressViewOffset = {1}
              refreshing={refreshing}
              onRefresh={ getData }
              />
              }
              renderItem = {_renderItem}
        />
        <Button title = "Go Back Home" onPress = {onPressHandler} />
   </View> 
  );
}
*/


  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name = "Home" component = {Home}/>
      <Stack.Screen name = "Crypto" component = {Crypto} />
    </Stack.Navigator>
  </NavigationContainer>
  );

}


export default App

/*
    <FlatList
           data = {data}
           keyExtractor = {(index) =>index.id}
            refreshControl = {
              <RefreshControl
              progressBackgroundColor = {"red"}
              progressViewOffset = {1}
              refreshing={refreshing}
              onRefresh={ getData }
              />
              }
              renderItem = {_renderItem}
     />

*/