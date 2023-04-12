import { useRef, useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {useDispatch ,   useSelector } from 'react-redux'
import { setUserData } from '../../commen/user_slice'

function LogIn() {
   
  const email = useRef("")
  const password = useRef("")
  const userData = useSelector(state=>state.user.userData)
  const route = useNavigate()
  const dispatch = useDispatch()
  const [hasNoAcount , sethasNoAcount] = useState(false)


  useEffect(()=>{
    if(localStorage.getItem("codevanced_inf") != null){
      dispatch(setUserData(JSON.parse(window.localStorage.getItem("codevanced_inf"))))
    }

    if(localStorage.getItem("codevanced_inf") == null){
      sethasNoAcount(true)
    }

  },[])

  if(hasNoAcount){
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
         <section id="sign-up" className="">
            <div className="sign-up-className">
                <div className="information">
                  <p><span style={{fontWeight:'bold' , fontSize:'1.7rem'}}>Note : 
                  </span> you do not have an acount to log in </p>
                </div>            
                <footer className="sign-up-footer">
                    <p> 
                      got to the 
                      <Link to="/codevanced/user_view/join"> Sign-up </Link>
                      page to register
                    </p>
                </footer>   
            </div>              
        </section>
      </div> 
        
      )
  }

  const handleSubmit = (e)=>{  
    e.preventDefault()
    if(email.current.value != userData.email){
       alert("The Email is not the same")
       email.current.value = ""
       return 
    }
    if(password.current.value != userData.password){
      alert("The Password is not the same")
      password.current.value = ""
      return 
    }

    let userInf = {
      ...userData
    }   
    
    let codevanced_inf = {
      firstName : userInf.firstName,
      lastName : userInf.lastName,
      email : userInf.email,
      password : userInf.password,
      login : true,
    }
   
       
    localStorage.setItem("codevanced_inf" , JSON.stringify(codevanced_inf))
    route("/codevanced/user_view")
  }
  


  return (  
    <div className="container">
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
          <div className="sign-up-class">
              <div className="icon"><i className='bx bxs-key' ></i></div>
              <form className="information">
                  <label htmlFor="em">Email :</label>
                  <input type="email" ref={email} placeholder="email" id="em" required />
                  <label htmlFor="pa">Passward :</label>
                  <input type="password" ref={password} placeholder="name" id="pa" required />
                  <button onClick={handleSubmit} className="btn">log in</button>
              </form>               
              <footer className="sign-up-footer">
                  <p>if you do not have an account 
                    <Link to="/codevanced/user_view/join"> Sign-up</Link></p>
                  <p>if you forgot your password
                    <Link to="/codevanced/user_view/user_profile"> Reset Password</Link></p>
              </footer>   
          </div>              
      </section>
    </div> 
      
  )
}

export default LogIn