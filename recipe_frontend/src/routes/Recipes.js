import React, {Component} from 'react';
import axios from "axios";
import RecipesInfo from "../components/RecipesInfo";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class Recipes extends Component{
    state = {
        recipes: [],
        category: 'All'
    }

    componentDidMount() {
        this.getRecipes()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.router.location.search !== this.props.router.location.search){
            this.getRecipes()
        }
    }

    getRecipes(){
        const searchCategory= window.location.search
        const category = new URLSearchParams(searchCategory).get("name")


        if (searchCategory){
            axios
                .get(`http://127.0.0.1:8000/api/v1/recipes/${searchCategory}`)
                .then(response => {
                    this.setState({
                        recipes: response.data,
                        category: category
                    })
                })
                .catch(err => console.log(err))
        } else {
            axios
                .get(`http://127.0.0.1:8000/api/v1/recipes/`)
                .then(response => {
                    this.setState({
                        recipes: response.data,
                        category: 'All'
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render(){
        return(
            <RecipesInfo key={this.state.category} recipes={this.state.recipes} category={this.state.category}/>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(Recipes);