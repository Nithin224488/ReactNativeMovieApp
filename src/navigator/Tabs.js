import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false, style: {
                position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor: "#fff", borderRadius: 15, height: 90
            }
        }}>
            <Tab.Screen name="trend" component={StackNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tab}>
                        <Ionicons name="trending-up" size={24} color="red" style={{ alignSelf: 'center', }} />
                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontWeight: 'bold' }}>Trend</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="home" component={StackNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tab}>
                        <Ionicons name="home" size={24} color="red" style={{ alignSelf: 'center', }} />
                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontWeight: 'bold' }}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="saved" component={StackNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tab}>
                        <Entypo name="wallet" size={24} color="red" style={{ alignSelf: 'center', }} />
                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontWeight: 'bold' }}>Saved</Text>
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    tab: {
        flex: 1, flexDirection: 'row', color: 'red'
    }
})
