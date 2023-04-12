import axios from 'axios'
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link } from 'react-router-dom'

function Start() {
  

  // const qD = useQuery('qD' ,async ()=>{
  //   return (await axios.get("http://localhost:5000/questions")).data
  // },{
  //  onSuccess : (data)=>{
  //     console.log(data);
  //  }
  // })

  // const addN = useMutation(async ()=>{
  //   const data = await axios.post("http://localhost:5000/questions" , {
  //    title:"question text ?",
  //    answers : [
  //      {
  //       key : "web",
  //       value : "green"
  //      },
  //      {
  //       key : "mobile",
  //       value : "red"
  //      },
  //      {
  //       key : "desktop",
  //       value : "yollow"
  //      },
  //    ]
  //   })
  //   return await data.data
  // },{
  //   onSuccess : (data)=> console.log(data)
  // })

  
  return (
    <div style={{textAlign:'center' , margin: '100px auto' , width:"80%"}}>
        <Link className='btn' to="/codevanced/admin_view">database adminstration</Link>
        <Link className='btn' style={{marginLeft:'10px'}} to="/codevanced/user_view">
          user interface</Link>   
          <button onClick={()=>addN.mutate()}>addQ</button>     
    </div>
  )
}

export default Start