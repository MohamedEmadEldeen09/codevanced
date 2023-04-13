import React, { useRef } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../commen/user_slice'
import { useEffect } from 'react'

function SignUp() {
  const firstName = useRef("")
  const lastName = useRef("")
  const email = useRef("")
  const password = useRef("")
  const cPassword = useRef("")
  const route = useNavigate()
  const dispatch = useDispatch()
  const [hasSignedUp , setHasSignedUp]  = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("codevanced_inf") != null){
       setHasSignedUp(true)
    }
  })   

  if(hasSignedUp){
    return (
      <div className="container">
        <header className="header">
              <div className="head">
                <div className="logo">
                <Link to="/codevanced/user_view"><h2>
                  <span>&lt;</span> Codvanced <span>/&gt;</span>
                  </h2></Link> 
                </div>
              </div>
          </header>
          <hr /> 
        <section id="sign-up" className="">
          <footer className="sign-up-footer">
              <p>
                you have already signed up
                go to the <Link to="/codevanced/user_view/log_in">log in page</Link>
              </p>
          </footer>      
        </section>
      </div>
    )
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!email.current.value.includes("@") || !email.current.value.includes(".")){
      alert("invalid email the email must has special character like ( @ .)")
      return
    }
    if(email.current.value.includes(" ") || password.current.value.includes(" ")){
      alert("invalid text input the input must has no sapces")
      return
    }
    if(password.current.value != cPassword.current.value){
      alert("password must be the same as confirm password")
      return
    }

    let codevanced_inf = {
      firstName : firstName.current.value,
      lastName : lastName.current.value,
      email : email.current.value,
      password : password.current.value,
      login : false,
    }

    if( localStorage.getItem("codevanced_inf") == null){
      window.localStorage.setItem("codevanced_inf" , JSON.stringify(codevanced_inf))
    }
  
    dispatch(setUserData(JSON.parse(window.localStorage.getItem("codevanced_inf"))))
    route("/codevanced/user_view/log_in")
  }

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
               <div className="sign-up-footer sign-up-alert-notes">
               <span className='icon warning-icon'>
                <i className='bx bxs-message-square-error'></i></span>
                  <p>
                    if you already have an acount and signed up before on 
                    a defferent browser or you have signed throug your mobile
                    and now you open the website on your computer or the opposite, 
                    So please sign up again on this browser using the same
                    data or different does not matter .
                  </p>
               </div>                              
                <form className="information">
                  <label htmlFor="fn">First Name :</label>
                  <input type="text" ref={firstName} placeholder="first name" id="fn" 
                  required />
                  <label htmlFor="fl">Last Name :</label>               
                  <input type="text" ref={lastName} placeholder="Last name" id="fl" 
                  required />
                  <label htmlFor="em">Email :</label>
                  <input type="email" ref={email} placeholder="email" id="em" required />
                  <label htmlFor="pa">Passward :</label>
                  <input type="password" ref={password} placeholder="password" id="pa" 
                  required />
                  <label htmlFor="c-pa">Confirm Passward :</label>
                  <input type="password" ref={cPassword} placeholder="password" id="c-pa" 
                  required />
                  <button type="submit" onClick={handleSubmit} className="btn">
                    Sign Up</button>
                </form>               
                <footer className="sign-up-footer">
                    <p>if you already have an account 
                    <Link to="/codevanced/user_view/log_in"> log in</Link></p>
                </footer>   
            </div>                 
        </section>
     </div>
     
  )
}

export default SignUp