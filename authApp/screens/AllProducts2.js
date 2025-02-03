import React,{useState,useEffect} from "react";
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
const Allproducts = ({}) => {
    const [products, setProducts] = useState([]);
    const thirrjeAPI = async() => {
      const pergjigjja = await fetch('https://fakestoreapi.com/products');
      const data = pergjigjja.json();
        setProducts(data);
    }
    useEffect(() => {
      thirrjeAPI();
    }, []);
    return (
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
          <Text>{item.title}</Text>)
                  }        />
      </View>
    );
};
export default Allproducts;