
import React from 'react';
import { CocktailCard } from './CocktailCard';
import useFetch from "../hooks/useFetch";
import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CocktailList = () => {


    const [searchparams] = useSearchParams();
    const name = searchparams.get('category');

    const URL_CATEGORY_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + name;

    const list = useFetch(URL_CATEGORY_COCKTAILS);

    const cocktails = [];

    const loadData = () => {

        for (const key in list.data.drinks) {
            const element = list.data.drinks[key];
            cocktails.push(
                <div key={key} className="column is-one-quarter">
                    <CocktailCard cocktail={element} />
                </div>
            );

        }


    }

    loadData();

    return (
        <>
            <div className="columns is-multiline is-mobile">
                <div className="column is-12">
                    <h1 className='title'>{name}</h1>
                </div>
                {list ?
                     cocktails.map(item => item) 
                    : <Skeleton />}
            </div>
        </>

    )
}
