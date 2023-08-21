import React from "react";
import axios from 'axios';
import CategoriesInfo from "../components/CategoriesInfo";


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
                <CategoriesInfo categories={this.state.categories}/>
            </>
        )
    }

}

export default Categories;