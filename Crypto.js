import React, { useEffect, useState } from 'react';
import { View, Button,FlatList, RefreshControl, ToastAndroid, TextInput,Switch,Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
import _ from "lodash"
import { globalStyles } from '../AppStyle';
import Coin from '../components/Coin';

function Crypto({ navigation }) {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [refreshing, setRefreshing] = useState(false);
    const [isEnabled, setEnabled] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setRefreshing(true)
        const BASE_URL = "https://api.coingecko.com/api/v3/"
        axios.get(BASE_URL + "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then(res => {
            setData(res.data)
            setTimeout(() => {
            setRefreshing(false)
            if (Platform.OS === "android") {
                ToastAndroid.show('2 DAKİKADA BİR YENİLE', ToastAndroid.SHORT);
            }
            }, 2000)
        }).catch(err => {
            console.log(err)
        })
    }

    const filterData = search
    ? data.filter(item => {
    const itemData = item.name.toUpperCase()
    const searchData = search.toUpperCase()
    return itemData.indexOf(searchData) > -1
    })
    : data

   const onToggle = () =>{
    setEnabled(press => !press)
   }
    
    const sortedData = _.sortBy(filterData, ["total_volume"]) 
    const sorted = _.sortBy(filterData, ["name"])
    const boolen = isEnabled ? sortedData : sorted
    console.log(boolen)


    const onPressHandler = () => {
        navigation.navigate("ScreenA")
    }

    const _renderItem = ({ item }) => {
        return (
            <View>
                <Coin
                navigation= {navigation}
                allItem = {item}
                image = {item.image}
                name  = {item.name}
                symbol = {item.symbol}
                last_updated = {item.last_updated}
                total_volume = {item.current_price}
                price = {item.price_change_percentage_24h}
                />       
            </View>
        )
    }

    /*const _searchItem = () =>{
    return(<TextInput style = {globalStyles.search} placeholder="Type Here..." value={search} onChangeText={(search) => setSearch(search)} />)
    }*/

    return (
    <View style={globalStyles.container}> 
        <Text style = {globalStyles.title}>361 CRYPTO</Text>
       
       <Icon style = {globalStyles.ıcon} name = {"menuunfold"} size = {35}/>
       <Icon style = {globalStyles.ıcon2} name = {"setting"} size = {35}/>
       
        <Switch
        onValueChange = {onToggle}
        value = {isEnabled}
       />
       <TextInput style = {globalStyles.search} placeholder="Search Coin..." value={search} onChangeText={(search) => setSearch(search)} />
            <FlatList
                data={boolen}
                extraData = {filterData}
                keyExtractor={(index) => index.id}
               // ListHeaderComponent = {_searchItem}
                refreshControl={
                    <RefreshControl
                    progressBackgroundColor={"red"}
                    progressViewOffset={1}
                    refreshing={refreshing}
                    onRefresh={getData}
                    />
                }
                renderItem={_renderItem}
            />
    </View>
    );
}
export default Crypto;