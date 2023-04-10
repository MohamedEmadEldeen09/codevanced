
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {  questions_url, resetTheQuestions } from "../../commen/admin_slice"
import { useMutation, useQuery, useQueryClient } from "react-query"
import axios from "axios"
import { useRef, useState } from "react"

function Questions({isLogin , questions}) {

  const dispatch = useDispatch()
  const [searchInput , setSearchInput] = useState("")
  const [statistics , setStatistics] = useState({
    web : 0,
    mobile : 0,
    desktop: 0
  })
  const resetNumber = useRef(null)

  //load the questions
  const questionsByQuery= useQuery("questiond_getAll" , async()=>{
    const res = await axios.get(questions_url)
    return res.data
  } ,{
    onSuccess : (data)=>{
      dispatch(resetTheQuestions(data))
      let sumW = 0 , sumM =0 , sumD =0 
      data?.forEach((q)=>{
        // Object.keys(q.answers).forEach((option)=>{
        //   if(option === "web") sumW += 1
        //   if(option === "desktop") sumD += 1
        //   if(option === "mobile") sumM += 1
        // })
        q.answers.forEach((option)=>{
          if(option.key === "web") sumW += 1
          if(option.key === "desktop") sumD += 1
          if(option.key === "mobile") sumM += 1
        })
      })      
      setStatistics({
        web : sumW,
        mobile : sumM,
        desktop: sumD
      })
    }
  })
   
  const QueryClient = useQueryClient()
  const deleteQuestion = useMutation(async (id)=>{
    const del = await axios.delete(questions_url+"/"+id)
    return del.data
  } , {
    onSuccess : ()=>{
      //QueryClient.invalidateQueries('questiond_getAll')
      questionsByQuery.refetch()
    }
  })

  //getAnswers
  function getAnswers(obj , j){
  return obj.map((option , i)=>{
    return (
    <article key = {i+1*45}>
        <label htmlFor={'a' + j+i }>
          <input type="radio" id={'a' + j+i } name={"option"+'-'+j} />{option.value}           
        </label>
       {isLogin && <label style={{marginLeft:'20px'}}>{"(key="+option.key+")"}</label>}
    </article>
    )
})
  }

  let handleDelete = (e)=>{
    deleteQuestion.mutate(e.target.id)
  }

  if(questionsByQuery.isLoading){
   return <h3>Loading......</h3>
  }
  if(questionsByQuery.error){
   return <h3>{questionsByQuery.error.message}.</h3>
  }
  if(deleteQuestion.isLoading){
    return <h3>wait removing running......</h3>
   }
   if(deleteQuestion.error){
    return <h3>{deleteQuestion.error.message}.</h3>
   }

  const handleSearchInputChange = (e)=>{
      setSearchInput(e.target.value)
  }

  const handleReset = ()=>{
    setSearchInput("")
    resetNumber.current.value = ""
    resetNumber.current.focus()
  }


  //the questions itself
  let items = questionsByQuery.data?.map((question , i)=>{
    return(
     <section className="question_block" key={i+1}>
     <div className="question_content">
       <h3>{i+1}- {question.title}</h3>
        { getAnswers(question["answers"] , i)}
     </div> 
     <hr />
     <div className="controller">
       <button onClick={handleDelete} disabled={!isLogin} className="controller-icon">
         <i className='bx bxs-trash' id={question.id}></i></button> 
       <Link  to={"/codevanced/admin_view/editQ/" + question.id} className="controller-icon">
         <i className='bx bxs-edit-alt' id={question.id}></i></Link> 
     </div>
   </section>
   )}
   )

   if(searchInput != "" && searchInput != "0" && 
      searchInput<= items.length){
      let newItems = items.filter(item=> item.key === searchInput)
      items = newItems
   }

  return (
   <>
     <div className="search_htmlForQ">
        <p className="search-label">Go to specific question</p>
        <i className='bx bx-search-alt-2'></i>
        <input type="number" min="1" max={questionsByQuery.data.length} 
        defaultValue="" id="search-id" ref={resetNumber} onChange={handleSearchInputChange} />
        <button onClick={handleReset}>Reset</button>
        {
          isLogin && <span>statistics - Question {questionsByQuery.data.length} / 
          web {statistics.web} 
          / mobile {statistics.mobile} / desktop {statistics.desktop}</span>
        }
        
        </div>
        <div className="questions_container">       
        
       {
        items
       }
      </div>
    </>
  )
}

export default Questions