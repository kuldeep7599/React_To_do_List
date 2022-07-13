import React from 'react'

const Plan =(props)=>{
    
    // document.getElementsByName('plan').inner

    
    const reddy_list = props.items.map((value, id)=>{
        //  console.log(value, i)
        return (
            <>
            <li className='shadow p-- my-2 col-sm-7'>{ value }</li>
            <button className='btn btn-warning my-2 col-sm-2 ' onClick={()=> {props.listUpdate(id)}}> Update </button>       
            <button className='btn btn-danger my-2 col-sm-2 offser-1' style={{marginLeft: "2px"}} 
                                                                 onClick={()=> {props.deleteList(id)}}> Delete</button>
            </>
        )

     })
     return reddy_list 



    

    

    // return <>
        // <li className='shadow p-- my-2 col-sm-7'>{ props.value }</li>
        // <button className='btn btn-warning my-2 col-sm-2 ' onClick={()=> {props.updatehandler(props.id)}}> Update </button>
        
        // <button className='btn btn-danger my-2 col-sm-2 offser-1' style={{marginLeft: "2px"}} 
        //                                                         onClick={()=> {props.deletehandler(props.id)}}> Delete</button>

    // </>
    
} 

export default Plan