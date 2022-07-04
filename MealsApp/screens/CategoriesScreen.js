import React from 'react';
import { 
    StyleSheet,
    FlatList
} from 'react-native';
import CategoryGridItem from '../components/CategoryGridItem';

import { CATEGORIES } from '../data/dummy-data';
import { useEffect } from 'react';

import MenuHeaderButton from '../components/header/MenuHeaderButton';

const CategoriesScreen = props => {

    useEffect(()=> {
        props.navigation.setOptions({
            headerTitle: 'Meal Categories',
            headerLeft:  () => {
                return (
                    <MenuHeaderButton/>
                );
            },
        });
    });

    const renderItem = (itemData) => {
        return <CategoryGridItem category={itemData.item}/>
    }

    return (
        <FlatList contentContainerStyle={styles.screen}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={(item, idx) => item.id}/>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',
    }
});

export default CategoriesScreen;