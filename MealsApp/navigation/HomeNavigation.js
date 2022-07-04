import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import DefaultOptions from './Defaults';


const Stack = createStackNavigator();

const HomeNavigation = props => {

    return (
        <Stack.Navigator screenOptions={DefaultOptions.stackDefaultOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}/>
        </Stack.Navigator>
    );
}

export default HomeNavigation;