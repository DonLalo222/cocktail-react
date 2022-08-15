import React, { useInsertionEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CocktailDetails = () => {

  const { id } = useParams();

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;

  const obj = useFetch(URL);

  let ingredients = [];

  const loadIngredients = () => {
    if (obj.data != 0) {
      for (let index = 0; index <= 15; index++) {

        let current = obj.data.drinks[0]['strIngredient' + index];

        if (current) {
          ingredients.push(current);
        }
      }

    }

  }
  loadIngredients();

  return (
    <div className="columns">
      <div className="column is-5">
        <figure className='image'>
          <img className='is-rounded' src={obj.data != 0 ? obj.data.drinks[0].strDrinkThumb : <Skeleton />} alt="drink" />
        </figure>

      </div>
      <div className="column">

        <div className="columns is-multiline">

          <div className="column is-12 tile has-background-warning box">
            <h4 className='title has-text-centered'>{obj.data != 0 ? obj.data.drinks[0].strDrink : <Skeleton />}</h4>
          </div>

          <div className="column is-12 is-flex is-align-content-flex-start">
            <span class="tag is-info is-medium mr-2 is-light">{obj.data != 0 ? obj.data.drinks[0].strCategory : <Skeleton />}</span>
            <span class="tag is-info is-medium mr-2 is-light">{obj.data != 0 ? obj.data.drinks[0].strGlass : <Skeleton />}</span>
          </div>

          <div className="column is-12">
            <div className="content box">
              <h4 className='title has-text-centered'>Ingredients</h4>
              <div className="is-flex is-align-content-flex-start">
                {ingredients.length > 0 ? ingredients.map(ing => <span class="tag is-info is-medium m-2">{ing}</span>) : <Skeleton />}
              </div>
            </div>
          </div>

          <div className="column is-12">
            <div className="content box">
              <h4 className='title has-text-centered'>Instructions</h4>
              <p>
                {obj.data != 0 ? obj.data.drinks[0].strInstructions : <Skeleton />}
              </p>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}
