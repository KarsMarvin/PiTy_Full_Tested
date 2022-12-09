import { useState } from 'react'
import '../styles/citiesRegistration.scss'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from "react-router-dom";

function CitiesRegistration() {
    const [product,setProduct] = useState("")
    const [price,setPrice] = useState("")
    const [quantity,setQuantity] = useState("")
  
    const handleProductChange= (e) => {
      setProduct(e.target.value)
    }
    const handlePriceChange= (e) => {
      setPrice(e.target.value)
    }
    const handleQuantityChange= (e) => {
      setQuantity(e.target.value)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log("reached")
        if(product != "" && price != "" && quantity != ""){
          axios.post('localhost:8080/products/add',{
            name: product,
            price:price,
            quantity: quantity,
          }).then((res)=>{
            console.log(res)
            toast("Product added successfully",{
              position: "top-right",
              hideProgressBar : true,
              // theme: "dark",
              type: "success",
              closeOnClick: true,
            });
          }).catch(err=>console.log(err,"error"))
    
        }else{
          toast("Some fields are empty",{
            position: "top-right",
            hideProgressBar : true,
            // theme: "dark",
            type: "error",
            closeOnClick: true,
          });
        }
      }
      return (
    <div className="pity">
        <ToastContainer />
      <h1>PiTy</h1>
      <div className='prod'>
        <h3>Add A Product</h3>
        <form>
          <input type="text" className='prodname' name='product' placeholder='Product name' onChange={handleProductChange}/>
          <input type="number" className='price' name='price' placeholder='price' onChange={handlePriceChange}/>
          <input type="number" className='quantity' name='quantity' placeholder='Quantity' onChange={handleQuantityChange}/>
          <button type="submit" onClick={(e) => submitForm(e)} disabled={product == '' || price == '' || quantity == ''}>Add Product</button>
        </form>
      </div>
      <Link to="/prodList"><button className='viewprod'>View Products</button></Link>
    </div>
  )
}