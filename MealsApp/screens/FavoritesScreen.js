import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import MealList from '../components/MealList';
import MenuHeaderButton from '../components/header/MenuHeaderButton';
import { RegularText } from '../components/DefaultText';
import { View, StyleSheet } from 'react-native';

const FavoritesScreen = props => {

    const navigation = props.navigation;

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Your Favorites",
            headerLeft:  () => {
                return (
                    <MenuHeaderButton/>
                );
            },
        })
    });

    if (favMeals.length === 0 || !favMeals) {
        return <EmptyFavoritesScreen/>;
    }

    return (
        <MealList meals={favMeals}/>
    );
}

const EmptyFavoritesScreen = props => {
    return (
        <View style={styles.emptyScreenContainer}>
            <RegularText>You have no favorites yet.</RegularText>
            <RegularText>Try adding some with the heart icon.</RegularText>
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

export default FavoritesScreen;