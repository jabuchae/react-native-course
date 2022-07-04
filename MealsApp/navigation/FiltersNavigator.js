import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import FiltersScreen from '../screens/FiltersScreen';

import DefaultOptions from './Defaults';
const Stack = createStackNavigator();

const FiltersNavigator = props => {

    useEffect(() => {
        props.navigation.setOptions({
            drawerLabel: 'Filters'
        })
    })
    
    return (
        <Stack.Navigator screenOptions={DefaultOptions.stackDefaultOptions}>
            <Stack.Screen name="Filters" component={FiltersScreen}/>
        </Stack.Navigator>
    );
}

export default FiltersNavigator;