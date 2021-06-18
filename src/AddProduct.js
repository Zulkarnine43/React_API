import Header from './Header';
import { useState} from 'react';


function AddProduct() {
    
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    
    async function addProduct()
    {
        let item={name,price,description,file};
        const formData= new FormData();
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);

        let result = await fetch("http://localhost/apiLearn/public/api/addProduct",{
            method: "POST",
            body: formData
        });

        alert("Data saved");
    }


    
    return (
        <>
            <Header />
            <div class="col-md-6 offset-md-3" >
                <h1>Add Product</h1>

                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className='form-control' />
                <br />
                <input type="file"  onChange={(e) => setFile(e.target.files[0])} className='form-control' />
                <br />
                <input type="text" value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} className='form-control' />
                <br />
                <input type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} className='form-control' />
                <br />
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </>
    )

}
export default AddProduct;