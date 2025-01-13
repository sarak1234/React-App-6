import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
const About =({navigation})=>{
    return(
        <View>
            <Text>Welcime to about screen</Text>
            <Button
            title='Go the Home Page'
            onPress={()=>navigation.navigate("Home")}>
            </Button>
            <Button
            title='Go the Details Page'
            onPress={()=>navigation.navigate("Details")}>
            </Button>
        </View>
    )

}
export default About;