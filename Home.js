import React from 'react';
import { View, Button, Text } from 'react-native';


const Home = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate("Crypto")
    }
    return (
        <View>
            <Text>Hoşgeldiniz</Text>
            <Button title="Go Crypto" onPress={onPressHandler} />
        </View>
    )
}

export default Home;