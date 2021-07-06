import React,{Component, useEffect, useState,useCallback } from 'react';
import { StyleSheet, Text, View,Image,FlatList,RefreshControl, ToastAndroid,Pressable} from 'react-native';
import axios from 'axios';
import { globalStyles } from './AppStyle';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

 function screenA ({navigation}){

  const onPressHandler = () =>{
    navigation.navigate("screen_B")
  }

    return (
      <View>
        <Text>Screen A </Text>
         
        <Pressable 
          onPress = { onPressHandler}
        style = {({pressed}) => ({backgroundColor : pressed ? "#ddd" : "0f0"})}>
          <Text> GO B SCREEN</Text>
        </Pressable>
      </View>
    )
 }


 function screenB ({navigation}) {
  const onPressHandler = () =>{
    navigation.navigate("screen_A")
  }
  const onPressHandlerC = () =>{
    navigation.navigate("screen_C")
  }
   return(
    <View>
    <Text>Screen B </Text>
    <Pressable 
          onPress = { onPressHandler}
        style = {({pressed}) => ({backgroundColor : pressed ? "#ddd" : "0f0"})}>
          <Text> GO back A SCREEN</Text>
        </Pressable>
        <Pressable 
          onPress = { onPressHandlerC}
        style = {({pressed}) => ({backgroundColor : pressed ? "#ddd" : "0f0"})}>
          <Text> GO  C SCREEN</Text>
        </Pressable>
  </View>
   )
  
 }

 function screenC ({navigation}) {
  const onPressHandler = () =>{
    //navigation.navigate("screen_A")
    navigation.goBack()
  }
   return(
    <View>
    <Text>Screen C </Text>
    <Pressable 
          onPress = { onPressHandler}
        style = {({pressed}) => ({backgroundColor : pressed ? "#ddd" : "0f0"})}>
          <Text> GO C SCREEN</Text>
        </Pressable>
  </View>
   )
  
 }


 function App () {
    
  

   const [data,setData] = useState([])
  
   
 


  useEffect( () =>{
        
       axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    
       .then(res =>{
         setData(res.data)
         console.log(res.data)
        
       }).catch(err =>{
         console.log(err)
       })

    
      
  },[])

  const [refreshing, setRefreshing] = useState(false);
 
  /*const onRefresh = () =>{
   setRefreshing(true)
   setTimeout(() => {
    axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    
    .then(res =>{
      setData(res.data)
      setRefreshing(false)
      
    })
    
   }, 2000);
  
  }*/

  const onRefresh = () =>{
    setRefreshing(true)
    axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    
    .then(res =>{
      setData(res.data)
     // setRefreshing(false)
    })
    setTimeout(() =>{
      setRefreshing(false)
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
    },2000)
  }

  /*const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (data.length < 10) {
      try {
        let response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        );
        let responseJson = await response.json();
        console.log(responseJson);
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }
    else{
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }

  }, []);
 *////Kaynak : https://enappd.com/blog/refreshcontrol-pull-to-refresh-in-react-native-apps/130/
 

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name  = "screen_A"
         component = {screenA}
        />
        <Stack.Screen
         name  = "screen_B"
         component = {screenB}
        />
         <Stack.Screen
         name  = "screen_C"
         component = {screenC}
        />
       
      </Stack.Navigator>
        <View style={globalStyles.container}>
        <FlatList
         data = {data}
        keyExtractor = {(index) =>index.id}
          refreshControl = {
            <RefreshControl
            progressBackgroundColor = {"red"}
            progressViewOffset = {1}
            refreshing={refreshing}
            onRefresh={ onRefresh }
          />
          }
         renderItem = {({item}) =>
         <View key = {item.id}>
           <Image style = {globalStyles.img} source = {{uri : item.image}} />
          <Text style = {globalStyles.text}> name : {item.name}</Text>
          <Text style = {globalStyles.symbol}> sembol : {item.symbol}</Text>
          <Text> Güncelenen saat : {Date(item.last_updated)}</Text>
          <Text>toplam tutar : {item.total_volume.toLocaleString()}</Text>
          <Text> son 24 saatte kar : {item.price_change_percentage_24h.toFixed(2)}%</Text>
         
          
    
         </View>
         
        }
         />
       

      
      </View> 
   
      </NavigationContainer>
   
  );

}

/*const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },

  img : {
    top : 75,
    marginRight: 50,
    
    height : 60,
    width : 60 ,
    borderRadius : 300
  },
 
 
  text : {
    top : -30,
    marginTop : 60,
    marginLeft : 80,
    fontWeight :  'bold'
  },

  imgUrl : {
    marginTop : 40,
    height : 350,
    width : 350,
    marginBottom : 40
  },
 
  imgHori : {

    flex : 15,
    height : 20,
    width : 20 ,
    borderRadius : 300,
    marginRight: 10
  },


  symbol : {
    marginLeft : 80
 
  }
 
});
*/
export default App

/*
 {this.state.feedData.map(item =>(
    <Image style = {styles.img} source = {item.profile_image} />
        <Text style = {styles.text}>{item.username}</Text>
        <Image style = {styles.imgUrl} source = {item.image} 
        />
 ))}




*/ 