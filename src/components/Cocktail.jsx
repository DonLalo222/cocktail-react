import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

export const Cocktail = (props) => {
    
    return (

        
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src={props.cocktail.drinks[0].strDrinkThumb || <Skeleton />} alt="Description" />
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                        {props.cocktail.drinks[0].strDrink || <Skeleton />}
                    </h1>
                    <h2 className="subtitle is-4">
                        {props.cocktail.drinks[0].strCategory || <Skeleton />}
                    </h2>
                    <br />
                    <div className="has-text-centered">
                        <Link to={'/cocktails/' + props.cocktail.drinks[0].idDrink} className=''>Details</Link>
                    </div>
                </div>
            </div>
        
    )
}
