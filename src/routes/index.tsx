import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './routeParam';
import {HomeContact, DetailContact, AddContact, EditContact} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeContact">
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeContact"
          component={HomeContact}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailContact"
          component={DetailContact}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddContact"
          component={AddContact}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditContact"
          component={EditContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
