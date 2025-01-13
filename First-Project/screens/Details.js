import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
const Details =({navigation})=>{
    return(
        <View>
            <Text>Welcime to Details screen</Text>
            <Button
            title='Go the Home Page'
            onPress={()=>navigation.navigate("Home")}>
            </Button>
            <Button
            title='Go the About Page'
            onPress={()=>navigation.navigate("About")}>
            </Button>
        </View>
    )

}
export default Details;