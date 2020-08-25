import React, { Component } from 'react';
import axios from '../instance/axios';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    getLeadData(){        
        axios.get(`/?itemType=categories`)
            .then(res => {
            const data = res.data.categories;
            // console.log(data);

            const categories = Object.entries(data).map(([key, category], index) => 
                <Col md={4} lg={3} sm={4} xs={6} className="mb-2" key={key}>
                    <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label={category.name}  id={category.name + '-' + category.id} />
                </Col>
            )

            this.setState({
                categories
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getLeadData();
    }

    render() {
        return this.state.categories
    }
}

export default Category;