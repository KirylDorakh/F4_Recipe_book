import React from 'react';

import "../styles/App.css"
import {Link, Outlet} from "react-router-dom";


const App = () => {
    return (
        <>
            <header>
                <div className="app-name">
                    Recipies App
                </div>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to={`/`}>Recipe Categories</Link>
                        </li>
                        <li>
                            <Link to={`/recipes`}>All Recipes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="recipes">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default App;