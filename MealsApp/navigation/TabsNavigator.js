import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeNavigation from './HomeNavigation';
import FavoritesNavigation from './FavoritesNavigation';
import Colors from '../constants/Colors';

import { Icon }  from 'react-native-elements';
import { Platform } from 'react-native';

const Tabs = Platform.OS === 'android' && Platform.Version >= 21 ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const TabsNavigator = props => {

    const tabBarOptions = {
        activeTintColor: Colors.primary,
        activeColor: Colors.primaryContrast,
        shifting: true,
        barStyle:{ backgroundColor: Colors.primary }

    };

    const homeIcon = tabInfo => {
        return (
            <Icon 
                name='home' 
                type='font-awesome-5'
                color={tabInfo.color}
                size={22}
            />
        );
    }

    const favsIcon = tabInfo => {
        return (
            <Icon 
                name='heart' 
                type='font-awesome-5'
                color={tabInfo.color}
                solid={true}
                size={22}
            />
        );
    }

    useEffect(() => {
        props.navigation.setOptions({
            drawerLabel: 'Meals'
        })
    })

    return (
            <Tabs.Navigator
                tabBarOptions={tabBarOptions} 
                {...tabBarOptions}
            >
                <Tabs.Screen 
                    name="Home" 
                    component={HomeNavigation} 
                    options={{tabBarIcon: homeIcon}}
                />                
                <Tabs.Screen
                    name="Favorites"
                    component={FavoritesNavigation}
                    options={{tabBarIcon: favsIcon}}
                />
            </Tabs.Navigator>
    );
}

export default TabsNavigator;

