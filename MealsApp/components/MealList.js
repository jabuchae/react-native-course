import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem meal={itemData.item}/>
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={props.meals}
                keyExtractor={(m, idx) => m.id}
                renderItem={renderMealItem}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    list: {
        width: '90%',
        backgroundColor: 'white',
    },
});

export default MealList;
