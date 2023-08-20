import React from 'react';

const CategoriesInfo = (props) => {
    return (
        <div>
            <h1>Recipes Categories</h1>
            <ul>
                {props.categories.map(category => (
                    <li key={category.id}>
                        <a>{category.name}</a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default CategoriesInfo;