import React from 'react';

import classes from "../styles/Recipe.module.css"
import {useNavigate} from "react-router-dom";

const RecipeInfo = (props) => {
    const navigate = useNavigate()
    return (
        <div className={classes.recipe}>
            <h1>{props.recipe.title}</h1>
            <p>{props.recipe.body}</p>
            <button onClick={() => {navigate(-1)}}>Back</button>
        </div>
    );
};

export default RecipeInfo;