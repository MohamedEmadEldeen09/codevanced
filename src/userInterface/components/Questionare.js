import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  nextQuestion, resetTest, setStart } from '../../commen/user_slice'
import { useQuery } from 'react-query'
import axios from 'axios'
// import { questions_url } from '../../commen/admin_slice'

const questions_url = "https://codvanced-database.onrender.com/questions"
function Questionare() {

   const questionsByQuery = useQuery("question_gA" , async()=>{     
       return (await axios.get(questions_url)).data
    } 
   )

   const startTest = useSelector(state => state.user.startTest)
   const testFinish = useSelector(state => state.user.testFinish)
   const indexQ = useSelector(state => state.user.indexQ)
   const [userName , setUserName] = useState("User")

   const dispatch = useDispatch()
   let targetAnswer = ""

   useEffect(()=>{
      let userInfo =JSON.parse(localStorage.getItem("codevanced_inf")) 
      setUserName(`${userInfo.firstName} ${userInfo.lastName}`)
      return ()=>{
          dispatch(resetTest())      
      }
   },[])

   const handleStart = ()=>{
     dispatch(setStart(true)) 
   }
   
   const handleNext = (e)=>{
     e.preventDefault()
     if(targetAnswer === ""){
       return
     }
    dispatch(nextQuestion([targetAnswer , questionsByQuery.data]))
      
    } 
  
   const catchAnswer = (e)=>{
      targetAnswer = e.target.value
   }

   if(questionsByQuery.isLoading){
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
            <h1>Hello mohamed emad <i className='bx bxs-user-pin' ></i></h1>           
            </header>
            <hr />      
            <section className="quiz-question">
               <div className="quiz-container">
                  <h3>Loading......</h3>
               </div>           
            </section>         
         </div>
      )
   }
   if(questionsByQuery.error){
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
            <h1>Hello mohamed emad <i className='bx bxs-user-pin' ></i></h1>           
            </header>
            <hr />      
            <section className="quiz-question">
               <div className="quiz-container">
                 <h3>
                  There is some thing error with your internet connection or
                  the server is too busy refresh the page and try again.
                  </h3>
                 <h3>{questionsByQuery.error.message}.</h3>
               </div>           
            </section>         
         </div>
      )
   }


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
         <section className="quiz-question">
         {
            !startTest &&
            <div className="ready">                   
               <p>click start when you ready</p>
               <button className="btn" onClick={handleStart}>Start</button>                                                              
            </div>
         } 

         { startTest && 
         <div className="quiz-container">
         { !testFinish ? 
           <form>
            <label className="question-title">{indexQ+1} - 
            {questionsByQuery.data[indexQ]?.title}</label> 

            {
               questionsByQuery.data[indexQ]?.answers.map((option , i)=>{
                 return (
                  <article className="article" key={"optionBlock"+i+indexQ}>
                    <input type="radio" name={"option"+indexQ} id={"a"+i+indexQ} 
                     onClick={catchAnswer} value={option.value}/><label htmlFor={"a"+i+indexQ}>
                      {option.value}</label>
                  </article>
                 )
               })
            }

            <button type="button" className="btn" onClick={handleNext}>Next</button>
            <span className='counter-next'>{indexQ+1}/{questionsByQuery.data.length}</span>
            </form> 
           : 
           <Link to="/codevanced/user_view/result">see the result</Link>
         }          
         </div>  
      }     
      </section>
         
    </div>
    
  )
}

export default Questionare