import React from "react";
import axios from 'axios';
import CategoriesInfo from "../components/CategoriesInfo";
import categoriesInfo from "../components/CategoriesInfo";
import {Link} from "react-router-dom";

class Categories extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories(){
        axios
            .get("http://127.0.0.1:8000/api/v1/")
            .then(res => {
                this.setState({categories: res.data});
            })
            .catch(
                err => console.log(err)
            );
    }

    render(){
        return(
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to={`recipes/`}>All Recipes</Link>
                        </li>
                    </ul>

                </nav>
                <CategoriesInfo categories={this.state.categories}/>

            </>
        )
    }

}

export default Categories;