import React, {Component} from 'react';
import axios from "axios";
import RecipesInfo from "../components/RecipesInfo";

class Recipes extends Component{
    state = {
        recipes: [],
        category: 'All'
    }

    componentDidMount() {
        this.getRecipes()
    }

    getRecipes(){
        const searchCategory= window.location.search
        const category = new URLSearchParams(searchCategory).get("name")
        console.log(category)
        if (category){
            this.setState({
                category:category
            })
        }
        axios
            .get(`http://127.0.0.1:8000/api/v1/recipes/${searchCategory}`)
            .then(response => {
                this.setState({
                    recipes: response.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <>
                <RecipesInfo recipes={this.state.recipes} category={this.state.category}/>
            </>
        )
    }
}

export default Recipes;