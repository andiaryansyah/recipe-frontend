import axios from "axios";

export const setRecipes = (payload) => {
    return {type: 'RECIPE/GETALLRECIPES', payload};
}

export const FilterRecipes = (payload) => {
    return {type: 'RECIPE/SEARCHRECIPE', payload};
}

export const setLoading = (payload) => {
    return {type: 'RECIPE/RECIPELOADING', payload};
}

export const getRecipes = () => {
    return async(dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get('http://localhost:3000/api/recipes')
            .then((res) => {
            dispatch(setLoading(false));
                dispatch(setRecipes(res.data))
            })
            .catch((err) => {
            dispatch(setLoading(false));
            console.log(err);
            })
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}