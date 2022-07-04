import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import DefaultOptions from './Defaults';

const Stack = createStackNavigator();

const FavoritesNavigation = props => {

    return (
        <Stack.Navigator screenOptions={DefaultOptions.stackDefaultOptions}>
            <Stack.Screen name="Favorites" component={FavoritesScreen}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
    );
}

export default FavoritesNavigation;