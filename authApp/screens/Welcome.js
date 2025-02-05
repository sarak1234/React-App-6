import React, {useState}from "react";
import { View,Text,TextInput,Button,StyleSheet} from 'react-native-web'

const Welcome=({route})=>{
    const {username}=route.params || {}
    const Handle2= async()=>{
        try{
            const pergjigjja = await fetch("https://dummyjson.com/auth/login",{
                method:"POST",headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    username:username,
                   // password:password
                }),
                credentials:"omit"
            })
            const data =await pergjigjja.json()
            //console.log(data)
            if(data?.accessToken){
                navigation.navigate("ThirdScreen",{
                    username:username
                })
            }
            console.log(data)
        }
        catch(err){

        }
    }
    return(
        <View style={style.container}>
            <Text style={style.title}>
            Welcome to ThirdScreen {username ? `, ${username}`:""}
            </Text>
            <Text>This is the second screen where we show the logged-in users</Text>
            <Button title="ThirdScreen" onPress={Handle2}/>
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
export default Welcome;