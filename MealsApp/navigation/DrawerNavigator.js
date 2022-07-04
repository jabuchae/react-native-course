import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import FiltersNavigator from './FiltersNavigator';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
    const drawerOptions = {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontFamily: Fonts.regular,
        }

    };

    return (
        <Drawer.Navigator drawerContentOptions={drawerOptions} initialRouteName="Meals">
            <Drawer.Screen name="Meals" component={TabsNavigator} />
            <Drawer.Screen name="Filters" component={FiltersNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;