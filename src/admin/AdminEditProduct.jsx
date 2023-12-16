import React from 'react'
 
const AdminEditProduct = () => {
  return (
    <>
    <h2 className='m-4'>Updating Product for <span className='text-danger'>'Iphone 15 Pro'</span></h2>
      <div className='d-flex'>
        <div className='d-flex m4'>
            <form>
               <label>Product Name</label>
               <input type="text" className='form-control' placeholder='Enter the name of product'></input>
            </form>
 
        </div>
        <div>
            <h1>Image Preview</h1>
 
        </div>
    </div>
   
   
    </>
 
  )
}
 
export default AdminEditProduct
