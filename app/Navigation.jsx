import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Index from './index';
import About from './about';

const Stack = createSharedElementStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="index"
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen
          name="about"
          component={About}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params || {};
            return [
              {
                id: `item.${item.id}.image`,
                animation: 'fade',
                // resize: 'clip'
                // align: ''left-top'
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
