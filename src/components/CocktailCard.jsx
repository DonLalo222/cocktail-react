import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

export const CocktailCard = (props) => {

console.log(props)
    return (
        <div className="card box">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.cocktail.strDrinkThumb} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.cocktail.strDrink || <Skeleton />}</p>
                        <p className="subtitle is-6">ID:    {props.cocktail.idDrink}</p>
                    </div>
                </div>

                <div className="content">
                <Link to={'/cocktails/' + props.cocktail.idDrink} className=''>Details</Link>
                </div>
            </div>
        </div>
    )
}
