import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { globalStyles } from '../AppStyle';
import Swiper from 'react-native-swiper'

const ScreenC = ({ navigation }) => {

    const onPressHandler = () => {
    navigation.navigate("Home")
    }
    
    return (
      <Swiper>
      <View testID="Beautiful" style={globalStyles.slide2}>
        <Text style={globalStyles.text}>361</Text>
        <TouchableOpacity style = {globalStyles.button} onPress = {onPressHandler} >
          <Text>Contiune</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
    )
}

export default ScreenC;