import React, { useEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './HeaderButton';
import { useNavigation } from '@react-navigation/native';

const MenuButton = props => {
    return <HeaderButton {...props} iconProps={{solid: true}}/>
}

const MenuHeaderButton = props => {

    let navigation = useNavigation();

    const menuTapHandler = () => {
        navigation.toggleDrawer();
    }

    return (
        <HeaderButtons HeaderButtonComponent={MenuButton}>
            <Item title='Menu' iconName='bars' onPress={menuTapHandler}/>
        </HeaderButtons>
    );
}

export default MenuHeaderButton;