import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { RegularText } from  '../components/DefaultText';
const CategoryMealsScreen = props => {

    const {category} = props.route.params;

    const availableMeals = useSelector(state => {
        return state.meals.filteredMeals;
    });

    const displayMeals = availableMeals.filter(m => m.categoryIds.includes(category.id));

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: category.title,
        });
    });

    if (displayMeals.length === 0) {
        return <EmptyCategoryScreen/>
    }

    return (
        <MealList meals={displayMeals}/>
    );
}

const EmptyCategoryScreen = props => {
    return (
        <View style={styles.emptyScreenContainer}>
            <RegularText>No meals match your filters.</RegularText>
            <RegularText>Try changing the active filters through the menu.</RegularText>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyScreenContainer: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoryMealsScreen;