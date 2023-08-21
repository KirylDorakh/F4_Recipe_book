import React from 'react';
import {Link} from "react-router-dom";

const CategoriesInfo = (props) => {

    return (
        <div>
            <h1>Recipes Categories</h1>
            <ul>
                {props.categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/recipes?category=${category.id}&name=${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default CategoriesInfo;