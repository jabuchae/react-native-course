import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Fonts from '../constants/Fonts';

import { BoldText, RegularText } from '../components/DefaultText';

const MealItem = props => {

    const navigation = useNavigation();

    const onSelectMeal = () => {
        navigation.navigate(
            'MealDetail',
            {meal: props.meal}
        );
    }
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.meal.imageUrl}} style={styles.bgImage}>
                            <BoldText numberOfLines={1} style={styles.title}>{props.meal.title}</BoldText>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <RegularText>{props.meal.duration}m</RegularText>
                        <RegularText>{props.meal.complexity.toUpperCase()}</RegularText>
                        <RegularText>{props.meal.affordability.toUpperCase()}</RegularText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#F5F5F5',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
});

export default MealItem;