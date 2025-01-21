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

const ProfileContent = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const ProfileScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={ProfileContent} />
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

export default ProfileScreen;