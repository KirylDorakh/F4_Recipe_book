import React from 'react';

const RecipesInfo = (props) => {
    return (
        <ul>
            {props.recipes.map(recipe => <li key={recipe.id}>
                <a>{recipe.title}</a>
            </li>)}
        </ul>
    );
};

export default RecipesInfo;