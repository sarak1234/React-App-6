import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ScreenA = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen A</Text>
    <Button title="Go to Screen B" onPress={() => navigation.navigate('ScreenB')} />
  </View>
);

const ScreenB = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen B</Text>
    <Button title="Go to Screen A" onPress={() => navigation.navigate('ScreenA')} />
  </View>
);

const SearchContent = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Search Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const SearchScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Search">
      <Drawer.Screen name="Search" component={SearchContent} />
      <Drawer.Screen name="ScreenA" component={ScreenA} />
      <Drawer.Screen name="ScreenB" component={ScreenB} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
