import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to About screen</Text>
      <Button
        title='Go to Home Page'
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title='Go to Details Page'
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;