import React from 'react'
import { Link } from 'react-router-dom'

function Library() {
  return (
    <div className='container'>
      <header className="header">
        <div className="head">
          <div className="logo">
          <Link to="/codevanced/user_view"><h2>
              <span className='forLogo-char'>&lt;</span> Codvanced 
              <span className='forLogo-char'>/&gt;</span>
              </h2></Link> 
          </div>
        </div>
      </header>
      <hr /> 
      <section id="sign-up" className="">
        <div className="sign-up-className">
          <h2 style={{textAlign : 'center' , color : "var(--black)"}}> Comming Soon </h2>
        </div>
      </section>
    </div>
  )
}

export default Library