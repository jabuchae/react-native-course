import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            const alreadyFaved = state.favoriteMeals.some(m => m.id === action.mealId);
            if ( alreadyFaved) {
                const updatedFavs = state.favoriteMeals.filter(m => m.id !== action.mealId);
                return {...state, favoriteMeals: updatedFavs}
            } else {
                const [newFav] = state.meals.filter(m => m.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat([newFav])}
            }
        }
        case SET_FILTERS: {
            const filters = action.activeFilters;
            let filteredMeals = state.meals.slice();

            if (filters.isGlutenFree) {
                filteredMeals = filteredMeals.filter(m => m.isGlutenFree)
            }
            if (filters.isVegerarian) {
                filteredMeals = filteredMeals.filter(m => m.isVegerarian)
            }
            if (filters.isVegan) {
                filteredMeals = filteredMeals.filter(m => m.isVegan)
            }
            if (filters.isLactoseFree) {
                filteredMeals = filteredMeals.filter(m => m.isLactoseFree)
            }
            
            return {...state, filteredMeals: filteredMeals}
        }
        default: {
            return state
        }
    }
}

export default mealsReducer;