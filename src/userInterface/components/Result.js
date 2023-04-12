import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  setStart } from '../../commen/user_slice'
import { Link } from 'react-router-dom'

function Result() {

  const theResult = useSelector(state=>state.user.result)
  const dispatch = useDispatch()
  const [userName , setUserName] = useState("User")
  useEffect(()=>{
    dispatch(setStart(false))  
    let userInfo =JSON.parse(localStorage.getItem("codevanced_inf")) 
    setUserName(`${userInfo.firstName} ${userInfo.lastName}`)  
  })

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
      <header className="quiz-header">
            <h1> {userName} <i className='bx bxs-user-pin' ></i></h1>           
        </header>
        <hr />  
          <section className="result" id="result">
            <div className="title-result">
                <h1><i className='bx bx-code-alt'></i> {theResult} 
                    <i className='bx bx-code-alt'></i></h1> 
                <p>
                   <i className='bx bxs-quote-single-left' ></i>
                   -- we recomend the web develoment track,
                   you can choose the frontend side 
                   or the backend side we think the Two
                   sides fit you .               
               </p>
            </div>
            <div className="resources">
              <h2> Resources to Learn</h2>
              <p>
                here are some resources will help
                during the journay, you can search for 
                any course you want related to the recomended 
                track for you.
              </p> 
               <ul className="resources-content">
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.udemy.com/" target="_blank">Udemy</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.coursera.org/" target="_blank">Coursera</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.udacity.com/" target="_blank">Udacity</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.codecademy.com/" target="_blank">Codecademy</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.freecodecamp.org/" target="_blank">Freecodecamp</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://academy.hsoub.com/" target="_blank">Hasub Acadamy</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a></li>
                 <li><i className='bx bxs-hand-right'></i>
                    <a href="https://www.w3schools.com/" target="_blank">W3School</a></li>
               </ul>
            </div>
        </section>  
    </div>
    
  )
}

export default Result