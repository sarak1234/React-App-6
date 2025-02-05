import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Welcome from './screens/Welcome';
import Allproducts from './screens/Allproducts'; // Correct import path
import Product1 from './screens/Product1'; // Correct import path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Allproducts">
        <Stack.Screen name="AllProducts" component={Allproducts} />
        <Stack.Screen name="Product1" component={Product1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// return (
//   // <NavigationContainer>
//   //   <Stack.Navigator>
//   //     <Stack.Screen name="Login" component={Login} options={{ title: "Login Screen" }} />
//   //     <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome Screen" }} />
//   //   </Stack.Navigator>
//   // </NavigationContainer>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
