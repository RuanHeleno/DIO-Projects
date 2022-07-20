import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Perfil from '../Perfil'
import Principal from '../Principal'

const Tab = createBottomTabNavigator()

export default function Main() {
    return (
        <Tab.Navigator
            options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if(route.name === 'Home') iconName='home'
                    else if(route.name === 'Perfil') iconName = 'user'

                    return <Feather name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Principal" component={Principal} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}