import React from "react";
import axios from 'axios';

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
            <div>
                <div>
                    <a>All recipies</a>
                </div>
                {this.state.categories.map(category => (
                    <div key={category.id}>
                        <a>{category.name}</a>
                    </div>
                ))}
            </div>
        )
    }

}

export default Categories;