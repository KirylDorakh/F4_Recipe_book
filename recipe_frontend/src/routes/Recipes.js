import React, {Component} from 'react';
import axios from "axios";
import RecipesInfo from "../components/RecipesInfo";

class Recipes extends Component{
    state = {
        recipes: []
    }

    componentDidMount() {
        this.getRecipes()
    }

    getRecipes(){
        axios
            .get("http://127.0.0.1:8000/api/v1/recipes/")
            .then(response => {
                this.setState({
                    recipes: response.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <RecipesInfo recipes={this.state.recipes}/>
        )
    }
}

export default Recipes;