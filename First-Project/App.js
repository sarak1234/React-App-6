import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Deatils from './screens/Deatils';
import About from './screens/About';
const Stack=craeteStackNavigator();

export default function App() {
  return (
    <NavigatonContainer>
   <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Details" component={Details}/>
    <Stack.Screen name="About" component={About}/>
   </Stack.Navigator>
    </NavigatonContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
