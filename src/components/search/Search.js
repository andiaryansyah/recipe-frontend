import React, {useState, useEffect} from 'react';
import "./Search.css";
import {useDispatch, useSelector} from 'react-redux';
import { FilterRecipes, getRecipes, setRecipes } from '../../store/action';

const Search = () => {
const dispatch = useDispatch();
const {recipe} = useSelector(state => state.recipe);
const [search, setSearch] = useState('');

useEffect(() => {
  const results = recipe.filter((recipes) => {
    return recipes.title.toLowerCase().includes(search.toLowerCase());
  });
  dispatch(FilterRecipes(results));
  console.log(results);
},[search]);


const filter = (e) => {
  setSearch(e.target.value);
}

  return (
    <>
    <section>
    <form className="search-form">
      <div className="form-control">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search Recipes.."
          onChange={filter}
        />
      </div>
    </form>
  </section>
  </>
  )
}

export default Search