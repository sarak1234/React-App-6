import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from './Icon'; // Import your custom Icon component

// Dummy Screens
import { SafeAreaView } from 'react-native';

// Fetch data for HomeScreen
function HomeScreen() {
  const [posts, setPosts] = useState([]);  // State to store posts
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null); // State to store errors if any

  // Fetch posts from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);  // Update state with the fetched posts
        setLoading(false);  // Set loading to false
      })
      .catch((err) => {
        setError('Failed to load data');  // Handle errors
        setLoading(false);  // Set loading to false
      });
  }, []);

  // If data is still loading, show a loading indicator
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#22D4FF" />
      </View>
    );
  }

  // If there's an error fetching the data, show the error
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={posts} // Data to display
        keyExtractor={(item) => item.id.toString()} // Unique key for each post
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function SearchScreen() {
  return (
    <View style={styles.screen}>
      <Text>Search Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Hide header
          tabBarShowLabel: false, // Hide text labels on tabs
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" iconText="Home" />, // Custom Icon with text
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <Icon name="magnify" iconText="Search" />, // Custom Icon with text
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <Icon name="account" iconText="Profile" />, // Custom Icon with text
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles for the screens
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  post: {
    marginBottom: 15,
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  body: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
