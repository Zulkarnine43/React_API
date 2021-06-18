import Header from './Header';
import axios from 'axios';
import React, { Component, useState } from 'react';

class UpdateProduct extends Component {

constructor(props) {
   
    super(props);
    this.state = {
      name: '',
       price: '',
        description: '',
    };

  }

componentDidMount(){

     const id=this.props.match.params.id;

     // const axios = require('axios');
    // // Make a request for a user with a given ID
       axios.get('http://localhost/apiLearn/public/api/productById/'+id)
          .then((response)=> {
            // handle success
            this.setState({name:response.data.name,price:response.data.price,
              description:response.data.description
            });
         // console.log(response);
           
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
}

formSubmit=(e)=>{
e.preventDefault();
const id=this.props.match.params.id;

const names = {name: this.state.name, price: this.state.price, description: this.state.description};

 axios.post('http://localhost/apiLearn/public/api/productUpdate/'+id,names)
          .then((response)=> {
            alert("success");
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
}

  render() {
    return (
         <>
            <Header />
            <form onSubmit={this.formSubmit}>
            <div class="col-md-6 offset-md-3" >
                <h1>Update Product</h1>
                <br />
                <input type="text" value={this.state.name} onChange={(e) =>{ this.setState({name:e.target.value})} } className='form-control' />
                <br />
                <input type="file" className='form-control' />
                <br />
                <input type="text" value={this.state.price}  onChange={(e) =>{ this.setState({price:e.target.value})} } className='form-control' />
                <br />
                <input type="text" value={this.state.description} onChange={(e) =>{ this.setState({description:e.target.value})} }  className='form-control' />
                <br />
                <button type="submit" className="btn btn-primary">Add Product</button>
            </div>
            </form>
        </>

        );
  }
}
export default UpdateProduct;