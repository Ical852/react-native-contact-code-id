import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './routeParam';
import {Splash, HomeContact, DetailContact, AddContact, EditContact, SearchContact} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchContact"
          component={SearchContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
