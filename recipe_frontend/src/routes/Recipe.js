import React, {Component} from 'react';
import axios from "axios";
import RecipeInfo from "../components/RecipeInfo";

class Recipe extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        recipe: [],
        search: window.location.pathname
    }

    componentDidMount() {
        this.getRecipe()
    }

    getRecipe(){
        axios
            .get(`http://127.0.0.1:8000/api/v1${this.state.search}`)
            .then(res => this.setState({recipe: res.data}))
            .catch((err => console.log(err)))
    }

    render() {
        return (
            <RecipeInfo recipe={this.state.recipe} />
        );
    }
}

export default Recipe;