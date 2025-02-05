import React, {useState}from "react";
import { View,Text,StyleSheet} from 'react-native-web'

const Welcome=({route})=>{
    const {username}=route.params || {}
    return(
        <View style={style.container}>
            <Text style={style.title}>
            Welcome to ThirdScreen {username ? `, ${username}`:""}
            </Text>
            <Text>This is the third screen where we show the logged-in users</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:80,
      paddingHorizontal: 20,
      backgroundColor:'#fff'
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:"center"
    }
  });
export default ThirdScreen;