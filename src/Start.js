import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  
  return (
    <div style={{textAlign:'center' , margin: '100px auto' , width:"80%"}}>
        <Link className='btn' to="/codevanced/admin_view">database adminstration</Link>
        <Link className='btn' style={{marginLeft:'10px'}} to="/codevanced/user_view">
          user interface</Link>        
    </div>
  )
}

export default Start