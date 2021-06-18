
import Header from './Header';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';

function ProductList() {

    const [data, setData] = useState([]);

    useEffect( () => {

       getData();

    }, [])

    async function deleteOperation(id)
    {
        let result= await fetch("http://localhost/apiLearn/public/api/productdelete/"+id,{
            method: "DELETE"
        });

        result=await result.json();
        console.warn(result);
        getData();
    }
    async function getData()
    {
        let result = await fetch("http://localhost/apiLearn/public/api/productList");
        result = await result.json();
        setData(result)
    }
   
    return (
        <>
            <Header />
            <div class="col-md-8 offset-md-2" >
                <h1>Product List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Operation</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img style={{ width: 100 }} src={"http://localhost/apiLearn/public/" + item.product_image} /></td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td><span onClick={()=>{deleteOperation(item.id)}} className='btn btn-danger'>Delete</span></td>
                                    <td><Link to={"/update/"+item.id}><span  className='btn btn-primary'>Edit</span></Link></td>
                                </tr>
                            )
                        }


                    </tbody>
                </Table>
            </div>
        </>

    )

}
export default ProductList;