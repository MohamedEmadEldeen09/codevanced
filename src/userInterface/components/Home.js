import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//images
import webT from '../images/webT.jpg'
import mobT from '../images/mobT.png'
import desT from '../images/desT.png'
import desT2 from '../images/desT2.png'
import review1 from '../images/review1.jpg'
import review7 from '../images/review7.jpg'
import review4 from '../images/review4.jpg'
import review6 from '../images/review6.jpg'
import review2 from '../images/review2.jpg'




function Home() {

const [darkTheme , setTheme] = useState(false)

useEffect(()=>{

// handle displaying the main menu
let m = document.getElementById('main-nav')
window.onresize = ()=>{
    if(window.innerWidth >= 600){
      if(!m.classList.contains('nav')){
        m.classList.remove('set-Menu')
        m.classList.add('nav')
      }
    }
    else if(window.innerWidth < 600){
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
})

//dark Theme
const changeTheme = ()=>{
  let dark = document.getElementById('dark')
  let r = document.querySelector(':root')
  let rs = getComputedStyle(r)
  // let darkmood = false
  if(!darkTheme){    
  r.style.setProperty('--black' , 'white')
  r.style.setProperty('--white' , 'black') 
    // darkmood= true
    setTheme(true)
  }else{  
  r.style.setProperty('--black' , 'black')
  r.style.setProperty('--white' , 'white')
  // darkmood= false 
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
          <Link to="/codevanced/user_view"><h2>Codvanced</h2></Link>         
       </div>
       <nav className="nav" id="main-nav"> 
          <a href="#home">Home</a>
          <a href="#library">Library</a>
          <a href="#test">Test</a>
          <div className="menu">
            <a href="#departments" id="drop">Careers</a>
            <ul className="dropdown">
              <li><a href="#web" className="dropdown-a">Web</a></li>
              <li><a href="#mobile" className="dropdown-a">Mobile</a></li>
              <li><a href="#desktop" className="dropdown-a">Desktop</a></li>
            </ul>
          </div>               
          <a href="#about">About</a>
          <a href="#contact">Contaact</a>                
       </nav>     
      </div>
       <div className="tail">
        <Link to='/codevanced/user_view/log_in' className="btn" id="join">Log in</Link>     
        <Link to='/codevanced/user_view/join' className="btn" id="join">Join</Link>
       </div>
    </header>
    
    <main className="main">

      <section className="section" id="home" role="region">
        <div className="verlay">
         <div className="home-content">                   
           <span className="alarm"></span>
           <h1>Career Develoment</h1>
           <p>Our role helping you finding the suitable programing track</p>                  
           <button className="btn btn-home">Get statrted for free</button>
         </div> 
       </div>   
      </section>

      
      <section className="section" id="departments" role="region">
         
        <div className="track" id="web">        
          <div className="track-content">
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, 
              cupiditate? Aliquid dolores nihil illo animi quas aperiam consequatur 
              quam repellat eius ab 
              distinctio illum explicabo, ipsum consectetur, nostrum enim officia?
            </p>
            <p className="read-more-guide">
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>
          <img src={webT} alt="" className="web-img" />
        </div>

        <div className="track" id="mobile">
          <img src={mobT} alt="" className="mobile-img" />
          <div className="track-content">
            <h3>Mobile Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, 
              cupiditate? Aliquid dolores nihil illo animi quas aperiam consequatur 
              quam repellat eius ab 
              distinctio illum explicabo, ipsum consectetur, nostrum enim officia?
            </p>
            <p>
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>        
        </div>

        <div className="track" id="desktop">
          <div className="track-content">
            <h3>Desktop Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, 
              cupiditate? Aliquid dolores nihil illo animi quas aperiam consequatur 
              quam repellat eius ab 
              distinctio illum explicabo, ipsum consectetur, nostrum enim officia?
            </p>
            <p>
              -- read more information
            </p>             
            <button className="second-type-ofBtn">Guide</button>
          </div>
          <img src={desT2} alt="" className="desktop-img" />
        </div>

      </section>

      <section className="section" id="about" role="region">
        
          <div className="visitors mid">
            <p>our popularity, our vistors have done the test</p>
            <h1><span id="counter-visitors">1</span><i className='bx bx-code-alt'></i></h1>
          </div>

          <div className="about-us">
            <h3 className="about-us-logo"><span className="code"> &lt;</span> codvanced 
              <span className="code">/ &gt;</span></h3>
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
             <span className="read-more"><span className="arrow">-&gt;</span>
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
            <img src={review4} alt="review" />
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
        <Link to="/codevanced/user_view/test" className="btn">Start</Link>
      </section>

      <section className="section contact" id="contact" role="region">
        <div className="contact-content">
          <h3>Ask us</h3>
          <p>Our role helping you finding the suitable programing 
            track email us for </p>
          <div className="social">
            <button className="btn-icon"><i className='bx bxl-twitter'></i></button> 
            <button className="btn-icon"><i className='bx bxl-facebook'></i></button>
            <button className="btn-icon"><i className='bx bxl-github'></i></button>
            <button className="btn-icon"><i className='bx bxl-youtube'></i></button>
          </div>         
        </div>
        <div className="message">
          <label htmlFor="email">Email :</label>                      
          <input type="text" placeholder=" enter your email" id="email" />
          <label htmlFor="textarea">Message :</label>
          <textarea name="" id="textarea" cols="50" rows="10"></textarea>
          <button type="button" className="btn">Send</button>
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
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Osama Raafat</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="5">
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Khaled Alaa</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="6">
            <img src={review7} alt="" />
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
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Cyrilis Sami</h4>
              <p>Develper in google</p>
            </div>           
          </div>

           <div className="card-author" id="9">
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Youssef Hamed</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="10">
            <img src={review7} alt="" />
            <div className="authors-content">
              <h4>Youssef Yasser</h4>
              <p>Develper in google</p>
            </div>           
          </div>

          <div className="card-author" id="11">
            <img src={review7} alt="" />
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