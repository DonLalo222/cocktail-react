import React from 'react';
import { Cocktail } from './Cocktail';
import useFetch from "../hooks/useFetch";

export const CocktailRandom = () => {


    const URL_RANDOM = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const random = useFetch(URL_RANDOM);

    return (
        <>
            {random.data != 0 ? <Cocktail cocktail={random.data} /> : 'Loading...'}
        </>

    )
}
