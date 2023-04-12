import React from 'react'
import { Link } from 'react-router-dom'

function Not_found() {
  return (
    <div className="container">
       <header className="header">
        <div className="head">
          <div className="logo">
          <Link to="/codevanced/user_view"><h2>
              <span className='forLogo-char'>&lt;</span> Codvanced 
              <span className='forLogo-char'> /&gt;</span>
              </h2></Link> 
          </div>
        </div>
      </header>
      <hr /> 
      <section id="sign-up" className="">
         <div className="sign-up-class">
              <div>
              this page not found 
              error 404 !
          </div>
         </div>
      </section>          
    </div>

    
  )
}

export default Not_found