import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch ,  useSelector } from 'react-redux'
import { Link, Route, useNavigate } from 'react-router-dom'
import { setUserData } from '../../commen/user_slice'
import { useEffect } from 'react'

function UserProfile() {

  const userData = useSelector(state=>state.user.userData)
  const [toEdit , setToEdit] = useState(false)
  const dispatch = useDispatch()
  const firstName = useRef("")
  const lastName = useRef("")
  const email = useRef("")
  const password = useRef("")
  const route = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("codevanced_inf") != null){
      dispatch(setUserData(JSON.parse(window.localStorage.getItem("codevanced_inf"))))
    }
   
  } , [])

  const handleEdit = (e)=>{
    e.preventDefault()

    
    let userInf = {
      ...userData 
    }


    let codevanced_inf = {
      firstName : firstName.current.value,
      lastName : lastName.current.value,
      email : email.current.value,
      password : password.current.value,
      login : userInf.login,
    }
   
    localStorage.removeItem("codevanced_inf")
    localStorage.setItem("codevanced_inf" ,JSON.stringify(codevanced_inf) )
    setToEdit(false)
  }

const changeData = ()=>{
    setToEdit(true)
}

const deletaAcount = ()=>{
  if(confirm("! are you sure that you want to delete this acount ?")){
    localStorage.removeItem("codevanced_inf")
    route("/codevanced/user_view")
  }
}

  return (
    <div className='container'>
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
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="user-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <form className="information">
                <label htmlFor="fn">First Name :</label>
                  <input type="text" ref={firstName} defaultValue={userData.firstName}  
                    disabled={!toEdit} id="fn" required />                  
                  <label htmlFor="fl">Last Name :</label>               
                  <input type="text" ref={lastName} disabled={!toEdit} 
                  defaultValue={userData.lastName} 
                  placeholder="Last name" id="fl" 
                  required />
                  <label htmlFor="em">Email :</label>
                  <input type="email" ref={email}  placeholder="email" id="em" 
                  disabled={!toEdit} defaultValue={userData.email} required />
                  <label htmlFor="pa">Passward :</label>
                  <input type="text" ref={password} placeholder="password" id="pa" 
                  disabled={!toEdit} defaultValue={userData.password} required />
                  <hr />
                  { 
                    toEdit &&
                    <button type="submit" onClick={handleEdit} className="btn">
                     Save</button>
                  }
                  
                </form>
                { 
                    !toEdit &&
                    <footer className="sign-up-footer">
                      <button onClick={changeData} className='btn'>Change</button>
                      <button onClick={deletaAcount} className='btn btn-del-acount' >                     
                        Delete this Acount</button>
                    </footer>  
                    
                  }               
                 
                
            </div>
        </section>
    </div>
  )
}

export default UserProfile