import React ,{ useState } from 'react'
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const  AddPlan = ()=> {
    state = []
   
    return (
      
        <div className="container-fluid my-5">
          <div className='row'>
  
            <div className='col-sm-6 mx-auto text-white shadow-lg p-3 '>
              <h2 className='text-center'> Today's Plan </h2>
                <div className='row'>
  
                  <div className='col-9'>
                    <input type='text' className='form-control' name='' placeholder='Write Plan Here' />
                  </div>
  
                  <div className="col-2">
                    <button className='btn btn-warning px-5 font-weight-bold' > Add </button>
                  </div>
  
                  <div className="conatainer-fluid">
                    <ul className="list-unstyled row m-5">
  
                    </ul>
                  </div>
  
                </div>
  
            </div>
  
          </div>
    
        </div>
    )
  }
  
  export default AddPlan


