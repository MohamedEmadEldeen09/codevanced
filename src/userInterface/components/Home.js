import React, { useEffect, useState , useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch ,  useSelector } from 'react-redux'
import { setUserData } from '../../commen/user_slice'


//images
import review1 from '../images/review1.jpg'
import review7 from '../images/review7.jpg'
import review4 from '../images/review4.jpg'
import review2 from '../images/review2.jpg'
import review5 from '../images/review5.jpg'
import appImage from '../images/appDownload.png'
import mobT2 from '../images/mobT2.png'
import frontT1 from '../images/frontT1.png'
import backT2 from '../images/backT2.png'
import dataS from '../images/dataS.png'
import webT from '../images/webT.png'




function Home() {

const [darkTheme , setTheme] = useState(false)
const [hasLogedIn , sethasLogedIn] = useState(false)
const userData = useSelector(state=>state.user.userData)
const emailOfMessage = useRef("")
const message = useRef("")
const [sendMessage ,  setMessage] = useState(null)
const dispatch = useDispatch()
const route = useNavigate()


useEffect(()=>{
 if(localStorage.getItem("codevanced_inf") != null){
   let userInf =JSON.parse(localStorage.getItem("codevanced_inf")) 
   if(userInf.login){
    sethasLogedIn(true)
   }
   if(!userInf.login){
    sethasLogedIn(false)
   }
  
  dispatch(setUserData(JSON.parse(window.localStorage.getItem("codevanced_inf"))))
 } 

// handle displaying the main menu
let m = document.getElementById('main-nav')
window.onresize = ()=>{
    if(window.innerWidth >= 830){
      if(!m.classList.contains('nav')){
        m.classList.remove('set-Menu')
        m.classList.add('nav')
      }
    }
    else if(window.innerWidth < 830){
        if(m.classList.contains('nav')){
            m.classList.remove('nav')
            m.classList.add('set-Menu')
        }
    }
}

//up
let btnUp = document.getElementById('up')
 window.onscroll = ()=>{ 
  if(window.scrollY >= 600){
    btnUp.style.display = 'block'
  }else{
    btnUp.style.display = 'none'
  }
}
  

 //counter-visitors
  let counter = document.getElementById('counter-visitors')
  let x = 1
  setInterval(()=>{
    counter.textContent = x
    x += 1
  },30)
} , [])

//dark Theme
const changeTheme = ()=>{
  let r = document.querySelector(':root')
  if(!darkTheme){    
  r.style.setProperty('--black' , 'white')
  r.style.setProperty('--white' , 'black') 
  r.style.setProperty('--dark' , 'rgb(18, 17, 17)') 
  r.style.setProperty('--signUpBlockBoxShadow' , '2px 2px 10px rgba(255, 255, 255, 0.576)') 
    setTheme(true)
  }else{  
  r.style.setProperty('--black' , 'black')
  r.style.setProperty('--white' , 'white')
  r.style.setProperty('--dark' , '#eee')
  r.style.setProperty('--signUpBlockBoxShadow' , '2px 2px 10px #00000038') 
   setTheme(false)
  }   
 
}

//up
const handleUp = ()=>{
  window.scrollTo({
    left : 0,
    top : 0 ,
    behavior : 'smooth'
  })
}

// handle displaying the main menu
const handleMenu = ()=>{
let m = document.getElementById('main-nav')
 if(m.classList.contains('nav')){
    m.classList.remove('nav')
    m.classList.add('set-Menu')
 }else{
    m.classList.remove('set-Menu')
    m.classList.add('nav')
 }

}

//to log out
const handleLogOut = ()=>{
  let userInf = {
    ...JSON.parse(localStorage.getItem("codevanced_inf")) 
  }
  localStorage.removeItem("codevanced_inf")
  let codevanced_inf = {
    firstName : userInf.firstName,
    lastName : userInf.lastName,
    email : userInf.email,
    password : userInf.password,
    login : false,
  }
  localStorage.setItem("codevanced_inf" ,JSON.stringify(codevanced_inf) )
  sethasLogedIn(false)   
}

//start test
const startTest = ()=>{
   if(hasLogedIn){
      route("/codevanced/user_view/test")
   }else{
      route("/codevanced/user_view/log_in")
   }
}

//to send a message 
const handleSend = ()=>{
  if(hasLogedIn){
    emailOfMessage.current.value = ""
    message.current.value = ""
    setMessage(true)
  }
  if(!hasLogedIn){
    setMessage(false)
  }
}

  return (
    <>
    <button id="main-menu" className="icon" onClick={handleMenu}><i className='bx bx-menu-alt-right'></i></button>
    <button className="icon" id="dark" onClick={changeTheme}><i className='bx bxs-droplet-half'></i></button> 
    <button className="btn" id="up" onClick={handleUp}>^ Up</button>
    <div className="circle c1"></div>
    <div className="circle c2"></div>
    <div className="circle c3"></div>
    <div className="bg-for-header"></div>
    <div className='container'>

    <header className="header">
      <div className="head">
        <div className="logo">
          <Link to="/codevanced/user_view"><h2>
            <span className='forLogo-char'>&lt;</span> Codvanced 
            <span className='forLogo-char'> /&gt;</span>
            </h2></Link>         
       </div>
       <nav className="nav" id="main-nav"> 
          <a href="#home">Home</a>
          <a href="#library">Library</a>
          <a href="#test">Test</a>
          <div className="menu">
            <a href="#departments" id="drop">Careers</a>
            <ul className="dropdown">
              <li><a href="#FrontEnd" className="dropdown-a">FrontEnd</a></li>
              <li><a href="#BackEnd" className="dropdown-a">BackEnd</a></li>
              <li><a href="#Android" className="dropdown-a">Android</a></li>
              <li><a href="#DataSience" className="dropdown-a">Data Sience</a></li>
            </ul>
          </div>               
          <a href="#about">About</a>
          <a href="#contact">Contaact</a>                
       </nav>     
      </div>
      
        {
          !hasLogedIn ?
          <div className="tail">
          <Link to='/codevanced/user_view/log_in' className="btn" >Log in</Link>     
          <Link to='/codevanced/user_view/join' className="btn" >Join</Link>
          </div> :
          <div className="tail">
          <Link to='/codevanced/user_view/user_profile' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="user-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

             </Link>                                     
          <Link onClick={handleLogOut}  className="btn" >Log out</Link>
          </div>
        }
        
       
    </header>
    
    <main className="main">

      <section className="section" id="home" role="region">
        <div className="verlay">
         <div className="home-content">                   
           <span className="alarm"></span>
           <h1>Career Develoment</h1>
           <p>Our role helping you finding the suitable programing track</p>                  
           <button onClick={startTest} className="btn btn-home">
            Get statrted for free</button>
         </div> 
       </div>   
      </section>

      
      <section className="section" id="departments" role="region">
         
        <div className="track" id="FrontEnd">        
          <div className="track-content">
            <h3>FrontEnd Development</h3>
            <p>
              For stepping into Front-End Development, the most 
              essential skills you should have been HTML, CSS, and 
              JavaScript. These skills are the bare minimum to start 
              with Front-End  Development. Note that front-end web 
              development is not just limited to these three  skills, 
              there are many more technologies that you will need to 
              learn to excel as a Front End Developer in 2023..... 
            </p>
            <p className="read-more-guide">
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>
          <img src={frontT1} alt="" className="web-img" />
        </div>

        <div className="track" id="BackEnd">
          <img src={backT2} alt="" className="mobile-img" />
          <div className="track-content">
            <h3>BackEnd Development</h3>
            <p>
              Programming language is the language through which the 
              developer can command the  computer. A back-end developer 
              needs to have knowledge of the programming  languages. There 
              are plenty of programming languages like C, C++, Java, etc. 
              Choose  one and start learning it. Understand every single 
              step and technique. Focus on one  language at a time, develop 
              the skill, and practice......             
            </p>
            <p>
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>        
        </div>

        <div className="track" id="Android">
          <div className="track-content">
            <h3>Android Development</h3>
            <p>
              Software engineering requires you to learn a programming language, 
              and in Android’s  case, there are two major programming 
              languages used- Java and Kotlin. Learning  Kotlin is a 
              good place to start because the language has been developed 
              by Google as a  replacement for Java. It offers a host of 
              features that ease the coding process. With  Kotlin, you can 
              code with minimal chances of coding errors and crashes. 
              One of the  reasons why programmers well-versed in Java 
              also learn Kotlin is that, besides offering  extensive 
              features, it is Java language compatible. With Kotlin, 
              you can use Kotlin codes  on Java and the other way around....... 
            </p>
            <p>
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>
          <img src={mobT2} alt="" className="desktop-img" />
        </div>
        
        <div className="track" id="DataSience">
          <img src={dataS} alt="" className="mobile-img" />
          <div className="track-content">
            <h3>Data Science</h3>
            <p>
              Data science is a huge field, with a lot of overlapping domains, 
              and the idea of having a lot of topics to  learn with a lot of 
              sources for each topic is a real headache. 
              You might have been wondering, what should I start with, 
              Should I start with learning machine learning?  
              What about deep learning? Everyone is talking about 
              deep learning; it must be the first thing to start  with.....                
            </p>
            <p>
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>        
        </div>

      </section>

      <section className="section" id="about" role="region">
        
          <div className="visitors mid">
            <p>our popularity, our vistors have done the test</p>
            <h1><span id="counter-visitors">1</span><i className='bx bx-code-alt'></i></h1>
          </div>

          <div className="about-us">
            <h3 className="about-us-logo"><span className="code"> &lt;</span> codvanced 
              <span className="code"> / &gt;</span></h3>
            <p className="about-us-description">
              <i className='bx bxs-quote-single-left' ></i>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, provident? Fuga 
              cupiditate magnam incidunt accusamus expedita sequi dolores 
              quod labore ad, at, in libero magni dicta vel et! Facilis, accusamus!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, provident? Fuga 
              cupiditate magnam incidunt accusamus expedita sequi dolores 
              quod labore ad, at, in libero magni dicta vel et! Facilis, accusamus!
              <i className='bx bxs-quote-single-right' ></i>             
              <span className="fot">--footer</span>                         
            </p>
            <p>
             <span className="read-more"><span className="arrow">-&gt;  </span>
             read more about our role and our approach</span> 
              <button type="button" className="btn">Documentation</button>
            </p>         
          </div>
        
        <h2 className="rev-title">reviews</h2>
        <div className="reviews">          
          <div className="card-review">
            <img src={review1} alt="review" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iste, 
              debitis sed aut commodi eius consequuntur laudantium? Ratione nam libero 
              ipsam nostrum, 
              similique inventore officia, saepe ut fugiat, vero eaque!
            </p>
          </div>
          <div className="card-review">
            <img src={review4} alt="review" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iste, 
              debitis sed aut commodi eius consequuntur laudantium? Ratione nam 
              libero ipsam nostrum, 
              similique inventore officia, saepe ut fugiat, vero eaque!
            </p>
          </div>
          <div className="card-review">
            <img src={review5} alt="review" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iste, 
              debitis sed aut commodi eius consequuntur laudantium? Ratione nam 
              libero ipsam nostrum, 
              similique inventore officia, saepe ut fugiat, vero eaque!
            </p>
          </div>
          <div className="card-review">
            <img src={review7} alt="review" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iste, 
              debitis sed aut commodi eius consequuntur laudantium? Ratione nam 
              libero ipsam nostrum, 
              similique inventore officia, saepe ut fugiat, vero eaque!
            </p>
          </div>
        </div>

        <footer className="footer-about" id="library" role="region">
          <div className="footer-about-content">          
            <p>
              <span className="cer">-- Certified from google</span> 
              <i className='bx bx-search-alt-2'></i> 
                -- <span className="google-span">Co-operation with google,</span> 
                 google has helped us providing
                 some of the best programing books 
                 about different programing languages
                 Java, C#, C++, Html.. and more          
             </p> 
             <Link to="/codevanced/user_view/library" className="second-type-ofBtn">
              <i className='bx bx-book-reader'></i> Explore</Link>
          </div>             
        </footer>
      </section>

      <section id="test" className="section test" role="region">
        <h3>Choose your career</h3>
        <p>
          we are going to help you with some question
          in order to clear your confusion about 
          the differnt tracks in the programing field
        </p>
        <button onClick={startTest} to="/codevanced/user_view/test" 
        className="btn">Start</button>
      </section>

      <section className="section contact" id="contact" role="region">
        <div className="contact-content">
          <h3>Ask us</h3>
          <p>Our role helping you finding the suitable programing 
            track email us for help</p>
          <div className="social">
            <button className="btn-icon"><i className='bx bxl-twitter'></i></button> 
            <button className="btn-icon"><i className='bx bxl-facebook'></i></button>
            <button className="btn-icon"><i className='bx bxl-github'></i></button>
            <button className="btn-icon"><i className='bx bxl-youtube'></i></button>
          </div>         
        </div>
        <div className="message">
          <label htmlFor="email">Email :</label>                      
          <input type="text" ref={emailOfMessage}  placeholder=" enter your email" 
          id="email" />
          <label htmlFor="textarea">Message :</label>
          <textarea name="" ref={message} id="textarea"  cols="50" rows="10"></textarea>
          {
            sendMessage === false &&
            <div className='sign-up-footer'> 
            <p>you have to <Link to="/codevanced/user_view/log_in">         
              Log in </Link> to email us</p>
            </div>
            
          }                
          {
            sendMessage &&<div className='sign-up-footer'><p>
              The message has sended and we will 
              also email you with response ,                        
              </p>
              <p>
                --Thank you for comunicating with us
              </p></div>
          }
          <button onClick={handleSend} type="button" className="btn">Send</button>
        </div>
      </section> 
      
      <section className='section appDownload'>        
          <div className='appD-content'>
          <p><i className='bx bxs-hand-right'></i> - use our application</p>
             <button className='btn'>Download</button>
          </div>
          <div className='for-appImage'>
             <img src={appImage} alt="app downloader photo"/>
          </div>
      </section>

      <section id="authors" className="section">
        <h2>Codvanced Authors</h2>
        <div className="authors-container">

          <div className="card-author" id="1">
            <img src={review1} alt="" />
            <div className="authors-content">
              <h4>Ahmed Rafat</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="2">
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Ahmed Eid</h4>
              <p>Develper in google</p>
            </div>           
          </div>

           <div className="card-author" id="3">
            <img src={review2} alt="" />
            <div className="authors-content">
              <h4>Ahmed Mahmoud</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="4">
            <img src={review5} alt="" />
            <div className="authors-content">
              <h4>Osama Raafat</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="5">
            <img src={review4} alt="" />
            <div className="authors-content">
              <h4>Khaled Alaa</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="6">
            <img src={review1} alt="" />
            <div className="authors-content">
              <h4>Ali Hassan</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="7">
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Omar Ahmed</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="8">
            <img src={review2} alt="" />
            <div className="authors-content">
              <h4>Cyrilis Sami</h4>
              <p>Develper in google</p>
            </div>           
          </div>

           <div className="card-author" id="9">
            <img src={review5} alt="" />
            <div className="authors-content">
              <h4>Youssef Hamed</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="10">
            <img src={review4} alt="" />
            <div className="authors-content">
              <h4>Youssef Yasser</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="11">
            <img src={review1} alt="" />
            <div className="authors-content">
              <h4>Mohamed Emad</h4>
              <p>Develper in google</p>
            </div>           
          </div>
        </div>

        <div className="authors-controllers">
          <a href="#1"><div className="next"></div></a>
          <a href="#2"><div className="next"></div></a>
          <a href="#3"><div className="next"></div></a>
          <a href="#4"><div className="next"></div></a>
          <a href="#5"><div className="next"></div></a>
          <a href="#6"><div className="next"></div></a>
          <a href="#7"><div className="next"></div></a>
          <a href="#8"><div className="next"></div></a>
          <a href="#9"><div className="next"></div></a>
          <a href="#10"><div className="next"></div></a>
          <a href="#11"><div className="next"></div></a>
        </div>
        <blockquote className="blockquote">
          <i className='bx bxs-quote-left'></i>
          -- <span id="forQuote">We never dream about success, we are working for it</span>
          <i className='bx bxs-quote-right'></i>
        </blockquote>  
      </section>
      
    </main>


    </div>
    </>
  )
}

export default Home