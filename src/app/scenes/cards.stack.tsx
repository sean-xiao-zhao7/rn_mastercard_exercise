import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CardsScreen from './cards.screen';
import CardsControlsScreen from './cards.controls.screen';

export type CardsRoutes = {
  Cards: undefined;
};

const Stack = createStackNavigator<CardsRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cards"
      screenOptions={{
        headerTitle: 'Cards',
      }}>
      <Stack.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          headerTitle: 'Cards',
        }}
      />
      <Stack.Screen
        name="CardsControls"
        component={CardsControlsScreen}
        options={{
          headerTitle: 'Cards Controls',
        }}
      />
    </Stack.Navigator>
  );
};
