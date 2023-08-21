import React from 'react';
import {Link} from "react-router-dom";

import classes from "../styles/RecipesInfo.module.css"

const RecipesInfo = (props) => {
    return (
        <div className={classes.recipes}>
            {props.category? <h1>{props.category} Recipes</h1> : <h1>Recipes</h1>}
            <ol>
                {props.recipes.map(recipe => <li key={recipe.id}>
                    <Link to={`${recipe.id}`}>{recipe.title}</Link>
                </li>)}
            </ol>
        </div>
    );
};

export default RecipesInfo;