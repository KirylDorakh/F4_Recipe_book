import React from 'react';

const RecipeInfo = (props) => {
    return (
        <div className="recipe">
            <h1>{props.recipe.title}</h1>
            <p>{props.recipe.body}</p>
        </div>
    );
};

export default RecipeInfo;