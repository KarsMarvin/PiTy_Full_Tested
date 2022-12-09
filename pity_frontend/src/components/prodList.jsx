import { useState } from 'react'
import '../styles/prodList.scss'
import axios from 'axios';
import { Link } from "react-router-dom";
import Product from './Product';

function CitiesList() {
    const [products,setProducts] = useState([])

    axios.get('localhost:8080/products/getAll').then((res)=>{
        console.log(res,"response")
        setProducts(res)
    }).catch(err=>console.log(err,"error"))

  return (
    <div className="pity">
      <h1>PiTy</h1>
      <Link to="/"><button>Add New Product</button></Link>
      <div className='productList'>
        <h3>List of Registered Products</h3>
            {products.map(product => (
                <div className='oneprod'>
                <p className='prodresult'>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.quantity};</p>
            </div>
            ))}
            {/* <div className='oneprod'>
                <p className='prodresult'>Computer</p>
                <p>$200</p>
                <p>200</p>
            </div> */}
      </div>
    </div>
  )
}

export default prodList
