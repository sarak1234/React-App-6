import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Details screen</Text>
      <Button
        title='Go to Home Page'
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title='Go to About Page'
        onPress={() => navigation.navigate("About")}
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

export default Details;