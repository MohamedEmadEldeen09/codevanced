import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { pop_option, push_information, questions_url, reset_Information, setQtitle, set_EditToFalse, set_EditToTrue, } from '../../commen/admin_slice'
import { useMutation } from 'react-query'
import axios from 'axios'


function AddQ({isLogin}) {

let title = useSelector(state => state.admin.q_title)
let information = useSelector(state => state.admin.information)
let toSubmitEdit = useSelector(state => state.admin.toSubmitEdit)
let followValueText = useRef("")
let followValueSelect = useRef("")
let followIdToEdit = useRef("")
const dispatch = useDispatch()
const route = useNavigate()

const addNew = useMutation(async (question)=>{
return (await axios.post(questions_url , question )).data
}, {
  onSuccess : ()=>{
    route('/codevanced/admin_view/questions')
  }
})

useEffect(()=>{
  return ()=> {
    dispatch(reset_Information())
  } 
},[])

// title change
function titleChange(e){
  dispatch(setQtitle(e.target.value))
}

//delete option 
let deleteOption = (e)=>{ 
 dispatch(pop_option(e.target.id))
 //console.log(information);
}

let handleSubmit = ()=>{
  if(!isLogin){
      return alert('Log in To Do This process')
  } 

  let newQuestion = {
    title ,
    answers : []
  }
  information.forEach((option)=>{
    // newQuestion.answers[option[3][1]] = option[2][1]
    newQuestion.answers.push({
      key:option[3][1],
      value: option[2][1]
    })
  })

  addNew.mutate(newQuestion)
}


//add option
let addOption = ()=>{    
 let newInformation = [   
      ['idDel' , "delete"+(information.length+1)],
      ['idEdit', "edit"+(information.length+1)],
      ['valueText' , followValueText.current.value],
      ['valueSelect' , followValueSelect.current.value]
 ]
 dispatch(push_information(newInformation))
 //console.log(information);
 followValueText.current.value = ""
 followValueSelect.current.value = ""
 followIdToEdit.current=""
}


//for editing
let handleEdit = (e)=>{
  information.forEach((inf , i) => {
    if(inf[1][1] === e.target.id){
      followValueText.current.value = inf[2][1]
      followValueSelect.current.value  = inf[3][1]
      return
    }
  });
  followIdToEdit.current = e.target.id
  dispatch(set_EditToTrue()) 
}
let submitEdit = ()=>{
  console.log(followIdToEdit.current,
    followValueText.current.value,
    followValueSelect.current.value);
  dispatch(set_EditToFalse([   
    followIdToEdit.current,
    followValueText.current.value,
    followValueSelect.current.value
  ]))
  followIdToEdit.current = ""
  followValueText.current.value = ""
  followValueSelect.current.value = ""
}
  
let cancelEdit = ()=>{  
  dispatch(set_EditToFalse('cancel'))
  followIdToEdit.current = ""
  followValueText.current.value = ""
  followValueSelect.current.value = ""
}

 if(addNew.isLoading){
    return <h3>wait adding process is running ....</h3>
 }
 if(addNew.error){
  return <h3>{addNew.error.message}</h3>
}
  return (
    <>
    <div className="important-notes">
          <h4>
          Note : there must be at least 2 options         
        </h4>
        <h4>
          Note : do not htmlForget to add (?) mark at 
                the end of your question
        </h4>      
    </div>
      
      <div className="add-option">
          <label htmlFor="">add new option</label> 
          <button className="add-new-option btn_login" disabled={!isLogin} onClick={addOption}>+</button>
        </div>

          <div className="add-question">
              <article>
                <label htmlFor="new-question">Question</label>
                <input type="text" id="new-question" className="text-htmlFor-newQ" 
                onChange={titleChange} />                  
              </article>  
              <article>
                <label htmlFor="new-text1">Option</label>
                <input type="text" id="new-text1" className="text-htmlFor-newQ"
                  ref={followValueText}/>                
                <select id="new-select1"  ref={followValueSelect}>
                  <option value="web">web</option>
                  <option value="mobile">mobile</option>
                  <option value="desktop">desktop</option>
                </select>
              </article>
              {toSubmitEdit && <button className="add-new-option btn_login" 
              onClick={submitEdit}>submit</button>}  
              {toSubmitEdit && <button className="add-new-option btn_login" 
              onClick={cancelEdit}>cancel</button>}                                                                                        
          </div>          
          <Link><button type="button" 
          onClick={handleSubmit}
          className="btn_login submit-add">
          Confirm Adding</button></Link> 

          <div className="view-live add-question">
            <h3>{title}</h3>
            <article>
                <label htmlFor={'a' + 0 }>
                      <input type="radio" id={'a' +0 } />
                      { information[0][2][1]}
                </label>
                <button className="add-new-option btn_login" id='edit1' 
                onClick={handleEdit}>edit</button>        
            </article> 
            <article>
                <label htmlFor={'a' + 1 }>
                      <input type="radio" id={'a' +1 } />
                      { information[1][2][1]}
                </label>
                <button className="add-new-option btn_login" id='edit2' 
                onClick={handleEdit}>edit</button>
            </article> 

            
            {
              information.map((inf , x)=>{
                if(x>1){
                  return (
                    <article key={'key'+x}>
                      <label htmlFor={'a' + x }>
                            <input type="radio" id={'a' +x } name={"option"+'-'} />
                            {inf[2][1]}
                      </label>
                      <button className="add-new-option btn_login" id={inf[1][1]} 
                      onClick={handleEdit}>edit</button>
                      <button className="add-new-option btn_login" id={inf[0][1]} 
                      onClick={deleteOption}>delete</button>
                    </article> 
                   )
                }
                
             })
            }
          </div>
    </>
  )
}

export default AddQ