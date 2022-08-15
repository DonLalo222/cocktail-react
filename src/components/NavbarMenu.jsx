import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';

export const NavbarMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const URL_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const categories = useFetch(URL_CATEGORIES);

    const catDrinks = [];


    const categoryDrinks = () => {

        for (const key in categories.data.drinks) {
            const element = categories.data.drinks[key];
            catDrinks.push(<li key={key}><Link className='navbar-item' to={'/cocktails?category=' + element.strCategory}>{element.strCategory}</Link></li>);

        }


    }

    categoryDrinks();

    return (
        <nav className="navbar has-backgorund-light">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="/img/icon-main.jpg" alt="Logo" />
                    </a>
                    <a id="burger" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div id="nav-links" className={`navbar-menu ${isActive ? "is-active" : ""}`}>

                    <div className="navbar-end">

                        <div className="tabs is-right">
                            <ul>
                                {catDrinks.length > 0 ? catDrinks.map(item => item) : <Skeleton />}

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}
