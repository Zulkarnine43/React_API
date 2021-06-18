import Header from './Header';
import axios from 'axios';
import React, { Component, useState } from 'react';

class UpdateProduct extends Component {

constructor(props) {
   
    super(props);
    this.state = {
      name: '',
    };

  }

componentDidMount(){

     const id=this.props.match.params.id;

     // const axios = require('axios');
    // // Make a request for a user with a given ID
       axios.get('http://localhost/apiLearn/public/api/productById/'+id)
          .then((response)=> {
            // handle success
            this.setState({name:response.data.name});
         // console.log(response);
           
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
}

  render() {
    return (

        <h2>{this.state.name}</h2>

        );
  }
}
export default UpdateProduct;