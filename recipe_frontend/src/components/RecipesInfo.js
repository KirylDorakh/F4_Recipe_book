import React from 'react';
import {Link} from "react-router-dom";

import classes from "../styles/RecipesInfo.module.css"

const RecipesInfo = (props) => {
    return (
        <div className={classes.recipes}>
            {props.category? <h1><span>{props.category}</span> Recipes</h1> : '...Error'}
            <ol>
                {props.recipes.map(recipe => <li key={recipe.id}>
                    <Link to={`${recipe.id}`}>{recipe.title}</Link>
                </li>)}
            </ol>
        </div>
    );
};

export default RecipesInfo;