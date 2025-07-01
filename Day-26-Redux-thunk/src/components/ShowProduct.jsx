import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts } from '../features/products/thunk';

function ShowProduct() {
    const {products} = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

  return (
    <>
       <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product, index) =>{
                    const {pname,price,discription,id} = product;
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{pname}</td>
                            <td>{price}</td>
                            <td>{discription}</td>
                            <td>
                                <button onClick={()=> dispatch(deleteProduct(id))} className='btn btn-danger'>Delete</button>
                                <button className='btn btn-warning'>Edit</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
 
    </>
  )
}

export default ShowProduct
