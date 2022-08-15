const initialState = {
    recipe:[],
    filterRecipe:[],
    loading:false
}

export default function reducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'RECIPE/GETALLRECIPES':
            return {...state, recipe: payload};
        case 'RECIPE/SEARCHRECIPE':
            return {...state, filterRecipe: payload};
            case 'RECIPE/RECIPELOADING':
                return {...state, loading: payload};
        default:
            return state;
    }
}