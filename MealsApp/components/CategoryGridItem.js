import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../constants/Fonts';


const CategoryGridItem = props => {

    const navigation = useNavigation();

    const navigateToCategory = () => {
        navigation.navigate(
            'CategoryMeals',
            {
                category: props.category
            }
        );
    }

    let TouchableButton = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableButton = TouchableNativeFeedback;
    }

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            margin: 15,
            height: 150,
            borderRadius: 10,
            elevation: 5,
            overflow: Platform.OS == 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        },
        gridItem: {
            flex: 1,
            backgroundColor: props.category.color,
            borderRadius: 10,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 15,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.27,
            shadowRadius: 10,
        },
        title: {
            fontFamily: Fonts.bold,
            fontSize: 20,
            textAlign: 'right',
        }
    });

    return (
        <View style={styles.view}>
            <TouchableButton onPress={navigateToCategory} style={{flex: 1}}>
                <View style={styles.gridItem}>
                    <Text style={styles.title} numberOfLines={2}>{props.category.title} </Text>
                </View>
            </TouchableButton>
        </View>
    );
};



export default CategoryGridItem;
