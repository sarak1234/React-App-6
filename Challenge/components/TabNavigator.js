import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from '../screens/Home';
import SecondScreen from '../screens/Details';
import ThirdScreen from '../screens/About';
import Icon from '../Icon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let iconText;

            if (route.name === 'Home') {
              iconName = 'home';
              iconText = 'Home';
            } else if (route.name === 'Second') {
              iconName = 'list';
              iconText = 'Second';
            } else if (route.name === 'Third') {
              iconName = 'information-circle';
              iconText = 'Third';
            }

            return <Icon name={iconName} iconText={iconText} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'lightgray',
          style: {
            backgroundColor: '#384053',
          },
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={FirstScreen} 
          options={{
            tabBarLabel: 'Home',
          }} 
        />
        <Tab.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{
            tabBarLabel: 'Second',
          }} 
        />
        <Tab.Screen 
          name="Third" 
          component={ThirdScreen} 
          options={{
            tabBarLabel: 'Third',
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;