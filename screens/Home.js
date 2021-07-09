import React from 'react';
import { View, Button, Text,TouchableOpacity} from 'react-native';
import { globalStyles } from '../AppStyle';
import Swiper from 'react-native-swiper'

const Home = ({ navigation }) => {

  const onPressHandler = () => {
  navigation.navigate("Crypto")
  }
    
    return (
      <Swiper>
      <View testID="Simple" style={globalStyles.slide3}>
        <Text style={globalStyles.text}>Hoşgeldiniz</Text>
        <TouchableOpacity style = {globalStyles.button} onPress = {onPressHandler} >
          <Text>Contiune</Text>
        </TouchableOpacity>
        </View>
    </Swiper>
    )
}

export default Home;
