import React, {useState}from "react";
import { View,Text,TextInput,Button,StyleSheet} from 'react-native-web'

const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const Handle= async()=>{
        //console.log(username,password)
        try{
            const pergjigjja = await fetch("https://dummyjson.com/auth/login",{
                method:"POST",headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    username:username,
                    password:password
                }),
                credentials:"omit"
            })
            const data =await pergjigjja.json()
            console.log(data)
        }
        catch(err){

        }
    }
    return(
        <View>
            <Text>Welcome to fake apo call</Text>
            <TextInput placeholder="Username" autoCapitalize="none" value={username}
            onChangeText={text=>setUsername(text)}/>
            <TextInput placeholder="Password" autoCapitalize="none" secureTextEntry={true} value={password}
            onChangeText={text=>setPassword(text)}/>
            <Button title="Login" onPress={Handle}/>
        </View>
    )
}
export default Login;