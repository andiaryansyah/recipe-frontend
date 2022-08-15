import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducers/recipeReducer';

const reducers = combineReducers({
    recipe:recipeReducer
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store;