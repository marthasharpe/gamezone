import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#8E44AD',
                    },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{title: 'My Games'}}
                />
                <Stack.Screen
                    name='Details'
                    component={Details}
                    options={{title: 'Game Details'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
