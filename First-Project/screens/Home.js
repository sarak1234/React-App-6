import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
const Home =({navigation})=>{
    return(
        <View>
            <Text>Welcime to Home screen</Text>
            <Button
            title='Go the Details Page'
            onPress={()=>navigation.navigate("Details")}>
            </Button>
            <Button
            title='Go the About Page'
            onPress={()=>navigation.navigate("About")}>
            </Button>
        </View>
    )

}
export default Home;