import React from 'react'
import AddProductData from './components/AddProductData'
import ShowProduct from './components/ShowProduct'

const App = () => {
  return (
    <>
     <div className='conteiner'>
      <div className="row mt-3">
        <div className="col-md-6 mx-auto">
          <AddProductData/>
          <ShowProduct/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
