import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { globalStyles } from '../AppStyle';
import Swiper from 'react-native-swiper'

const ScreenA = ({ navigation }) => {

  const onPressHandler = () => {
  navigation.navigate("ScreenC")
  }

    return (
      <Swiper>
      <View testID="Hello" style={globalStyles.slide1}>
        <Text style={globalStyles.text}>Burası</Text>
        <TouchableOpacity style = {globalStyles.button} onPress = {onPressHandler} >
          <Text>Contiune</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
    )
}

export default ScreenA;