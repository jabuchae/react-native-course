import React, { useState, useEffect, useCallback } from 'react';
import {View, StyleSheet, Text, Switch, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { BoldText, RegularText } from '../components/DefaultText';
import MenuHeaderButton from '../components/header/MenuHeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <RegularText>{props.label}</RegularText>
            <Switch 
                value={props.value}
                onValueChange={props.onValueChange}
                trackColor={{true: Colors.primary, false: '#EFEFEF'}}
                thumbColor={Colors.primaryContrast}
            />
        </View>
    );
}
const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegerarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isVegerarian: isVegerarian,
            isVegan: isVegan,
            isLactoseFree: isLactoseFree
        }

        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVegan, isVegerarian, dispatch]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Filter meals',
            headerLeft: () => {
                return <MenuHeaderButton />
            },
            headerRight: () => {
                return <HeaderButtons>
                    <Item 
                        title='Save'
                        onPress={saveFilters}
                        color={Platform.OS == 'android' ? Colors.primaryContrast : Colors.primary}
                    />
                </HeaderButtons>
            }
        }, [navigation, saveFilters]);
    });

    return (
        <View style={styles.screen}>
            <BoldText style={styles.title}>Available filters</BoldText>
            <FilterSwitch
                label='Gluten-free'
                value={isGlutenFree}
                onValueChange={newVal => setIsGlutenFree(newVal)}
            />
            <FilterSwitch
                label='Vegan'
                value={isVegan}
                onValueChange={newVal => setIsVegan(newVal)}
            />
            <FilterSwitch
                label='Vegetarian'
                value={isVegerarian}
                onValueChange={newVal => setIsVegetarian(newVal)}
            />
            <FilterSwitch
                label='Lactose-free'
                value={isLactoseFree}
                onValueChange={newVal => setIsLactoseFree(newVal)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 22,
        margin: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    }
});

export default FiltersScreen;