import React from 'react';
import { View, Text,TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../AppStyle';
import Swiper from 'react-native-swiper'

// import { useNavigation } from '@react-navigation/native';

const GroupItems = ({label, info}) => {
  console.log("zaaaaa ", label, info)
  return (
    <View style={globalStyles.divDetails}>
        <Text style={globalStyles.textDetail}>{label}</Text>
        <Text style={globalStyles.textDetail}>{info}</Text>
    </View>
  )
}

const ScreenDetails = ({ navigation, route }) => {
  // const crypto = useNavigation("crypto");
  console.log("checkkk", route.params);
  const {name, symbol, image,current_price,high_24h,low_24h,price_change_24h} = route.params.crypto;

  const onPressHandler = () => {
  navigation.navigate("Crypto")
  }

    return (
      // <Swiper>
      <View testID="Hello" style={globalStyles.slideDetail}>
        <Image style={globalStyles.img} source={{ uri: image }} />
        <Text style={globalStyles.text}>{name}</Text>
        <Text style={globalStyles.text}>{symbol}</Text>
        
        <GroupItems label="Current Price" info={`$${current_price.toLocaleString()}`} />
        <GroupItems label="high_24h" info={high_24h} />
        <GroupItems label="low_24h" info={low_24h} />
        <GroupItems label="price_change_24h" info={price_change_24h} />
        {/* <GroupItems label="Current Price" info={} /> */}
        

        <TouchableOpacity style = {globalStyles.buttonBottom} onPress = {onPressHandler} >
          <Text>Go Back</Text>
        </TouchableOpacity>
        
      </View>
    // </Swiper>
    )
}

export default ScreenDetails;