import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="movie" component={MovieScreen} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default StackNavigator
