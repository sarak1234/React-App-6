import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const AddPost =()=>{
    const [title,setTitle]=useState(' ');
    const [body,setBody]=useState(' ');
    const [response1,setResponse]=useState(null);
    const makePostRequest= async()=>{
        // console.log("titulli",title)
        // console.log(body)
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',headers:{
                    'Content-Type':'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title:title,
                    body:body,
                    userId:1
                })
            })
            const data =await response.json()
            setResponse(data)
        }
        catch(error){}
        
    }
    return(
       <View>
        <Text>Create a Post</Text>
        <TextInput value={title} onChangeText={text=>setTitle(text)}
            placeholder="Enter Title"/>
        <TextInput value={body} onChangeText={text=>setBody(text)}
        placeholder="Enter Body" multiline/>
        <Button title="Send Post Request " onPress={makePostRequest}/>
        {
            response1 &&(
                <Text>response :{JSON.stringify(response1,null,2)}</Text>
            )
        }
       </View>
    );
}
export default AddPost;