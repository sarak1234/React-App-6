// Icon.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = (props) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF" />
      </View>
      <Text style={styles.iconText}>{props.iconText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: '#384053',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  iconContainer: {
    alignItems: 'center',
    width: 60,
    height: 70, // Adjusted height to accommodate both icon and text
  },
  iconText: {
    height: 20,
    fontWeight: '600',
    fontSize: 12, // Adjust font size for text
    color: '#FFFFFF', // Text color
    marginTop: 5, // Space between icon and text
  }
});

export default Icon;
