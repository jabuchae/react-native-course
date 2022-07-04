import React, { useCallback } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/actions/meals';
import HeaderButton from './HeaderButton';

const FavoriteButton = saved => props => {
    return <HeaderButton {...props} iconProps={{solid: saved}}/>
}

const FavoriteHeaderButton = props => {
    const dispatch = useDispatch();
    const meal = props.meal;

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(meal.id));
    }, [dispatch, meal]);

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const isFavorite = favoriteMeals.some(m => m.id === meal.id);

    return (
        <HeaderButtons HeaderButtonComponent={FavoriteButton(isFavorite)}>
            <Item title='Favorite' iconName='heart' onPress={toggleFavoriteHandler}/>
        </HeaderButtons>
    );
}

export default FavoriteHeaderButton;