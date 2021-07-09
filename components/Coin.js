import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { globalStyles } from '../AppStyle';

function Coin ({ image, name, symbol, total_volume,price }){
    return (
        <View>
            <TouchableOpacity>
                <View style = {globalStyles.coin}>
                    <Image style={globalStyles.img} source={{ uri: image }} />
                    <Text style={globalStyles.name}>{name}</Text>
                    <Text style={globalStyles.symbol}>{symbol}</Text>
                    <Text style = {globalStyles.totalPrice}>{total_volume.toLocaleString()}</Text>
                     <Text style = {globalStyles.coins}>{price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default Coin;

