import React from 'react';
import {Link} from "react-router-dom";

import classes from "../styles/RecipesInfo.module.css"

const CategoriesInfo = (props) => {

    return (
        <div className={classes.recipes}>
            <h1>Recipes <span>Categories</span></h1>
            <ol>
                {props.categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/recipes?category=${category.id}&name=${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ol>

        </div>
    );
};

export default CategoriesInfo;