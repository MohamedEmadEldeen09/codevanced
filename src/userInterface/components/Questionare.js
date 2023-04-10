import React from 'react'

function Questionare() {
  return (
    <div className='container'>
         <header className="quiz-header">
            <h1>Hello mohamed emad <i className='bx bxs-user-pin' ></i></h1>           
        </header>
        <hr />

        <section className="quiz-question">
            <div className="ready">
                <p>click start when you ready</p>
                <button className="btn">Start</button>
            </div>
            
            <div className="quiz-container">
                 <label className="question-title">1 - What is your name ?</label> 
                 <article className="article">
                    <input type="radio" name="a" id="a1" /><label htmlFor="a1">Sara</label>
                 </article>
                 <article className="article">
                    <input type="radio" name="a" id="a2" /><label htmlFor="a2">Moahmed</label>
                 </article>
                 <article className="article">
                    <input type="radio" name="a" id="a3" /><label htmlFor="a3" >Ahmed</label>
                 </article>
                 <button type="button" className="btn">Next</button>                       
            </div>        
        </section>
    </div>
  )
}

export default Questionare