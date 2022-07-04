import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import FavoriteHeaderButton from '../components/header/FavoirteHeaderButton';

import { RegularText, BoldText } from '../components/DefaultText';

const MealDetailScreen = props => {

    const { meal } = props.route.params;

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: meal.title,
            headerRight: () => {
                return (
                    <FavoriteHeaderButton meal={meal}/>
                );
            },
        });
    }, [meal])

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>

            <View style={styles.details}>
                <RegularText>{meal.duration}m</RegularText>
                <RegularText>{meal.complexity.toUpperCase()}</RegularText>
                <RegularText>{meal.affordability.toUpperCase()}</RegularText>
            </View>

            <View style={styles.content}>

                <BoldText style={styles.title}>Ingredients</BoldText>
                {meal.ingredients.map( ingredient =>
                    <RegularText key={ingredient}> - {ingredient}</RegularText>
                )}

                <BoldText style={styles.title}>Steps</BoldText>
                {meal.steps.map( (step, idx) =>
                    <RegularText key={step}> {idx+1}) {step}</RegularText>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    title: {
        marginVertical: 10,
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    }
});

export default MealDetailScreen;