import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { pop_option, push_information, questions_url, reset_Information, setQtitle, set_EditToFalse, set_EditToTrue, set_information } from '../../commen/admin_slice'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'


//get the target question
const getTargetQuestion = async (id)=>{
  const question =await axios.get(questions_url+"/"+id)
  const questionData = await question.data
  return questionData
}

//update that question
const updateQuestion = async (updatedQ)=>{
  return (await axios.patch(questions_url +"/"+updatedQ.id , updatedQ)).data
}

function EditQ({isLogin}) {
  const dispatch = useDispatch()
  const {Qid} = useParams()
  let followValueText = useRef("")
  let followValueSelect = useRef("")
  let followIdToEdit = useRef("")
  let title = useSelector(state => state.admin.q_title)
  let information = useSelector(state => state.admin.information)
  let toSubmitEdit = useSelector(state => state.admin.toSubmitEdit)
   const route = useNavigate()

  let {data:questionData, error , isLoading } = 
  useQuery(['question' , Qid] , ()=> getTargetQuestion(Qid),{
    onSuccess : (data)=>{  
      dispatch(setQtitle(data.title))     
      let newInf = []
      data.answers.map((option, i)=>{
          let nf =[
            ['idDel' , "delete" + i],
            ['idEdit', "edit" + i],
            ['valueText' , option.value],
            ['valueSelect' , option.key]
          ]
          newInf.push(nf)
        })
      dispatch(set_information(newInf))
    }
  })

  const updateQ = useMutation(updateQuestion , {
    onSuccess : (data)=>{
      route('/codevanced/admin_view/questions')
    }
  })


  useEffect(()=>{
    return ()=> {
      dispatch(reset_Information())
    } 
  },[])

  //add option
  let addOption = ()=>{    
    let newInformation = [   
        ['idDel' , "delete"+(information.length+1)],
        ['idEdit', "edit"+(information.length+1)],
        ['valueText' , followValueText.current.value],
        ['valueSelect' , followValueSelect.current.value]
    ]
    dispatch(push_information(newInformation))
    followValueText.current.value = ""
    followValueSelect.current.value = ""
    followIdToEdit.current=""
  }
  const handleEdit = (e)=>{
    information.forEach((inf , i) => {
      if(inf[1][1] === e.target.id){
        followValueText.current.value = inf[2][1]
        followValueSelect.current.value = inf[3][1]
        return
      }
    });
    followIdToEdit.current = e.target.id
    dispatch(set_EditToTrue()) 
  }
  const deleteOption = (e)=>{
    dispatch(pop_option(e.target.id))

  }
  let submitEdit = ()=>{
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

  // title change
  function titleChange(e){
    dispatch(setQtitle(e.target.value))
  }

  const handleUpdate = ()=>{
    if(!isLogin){
      return alert('Log in To Do This process')
    }   
    let newChangedQ = {
      id:Number(Qid),
      title ,
      answers : []
    }
    information.forEach((option)=>{
      newChangedQ.answers.push({
        key:option[3][1],
        value: option[2][1]
      })
    })
    updateQ.mutate(newChangedQ)
  }

if(isLoading)  return <h3>Wait...</h3>
if(error){
  return (
   <h4>
    there is some thing wrong -
    {error.message} -
    <Link to="/" >try agin</Link> 
   </h4>
  )
}  


if(updateQ.isLoading){
   return <h3>updating process is running please wait.....</h3>
}
if(updateQ.error){
 return <h3>
   <p> there is some error please try again... </p>
   <p> {updateQ.error} </p>
  </h3>
}

  return (
    <>
    <div className="add-option">
          <label htmlFor="">add new option</label> 
          <button className="add-new-option btn_login" disabled={!isLogin} onClick={addOption}>+</button>
      </div>
    <div className="add-question">
       <article>
          <label htmlFor="new-question">Question</label>
          <input type="text" id="new-question" defaultValue={title} 
          onChange={titleChange}  
          className="text-htmlFor-newQ" />                  
        </article>
        <article>
          <label htmlFor="new-answer1">Option</label>
          <input type="text" id="new-answer1" ref={followValueText} 
          className="text-htmlFor-newQ" />
          <select ref={followValueSelect}>
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
      <Link><button type="button" onClick={handleUpdate} 
       className="btn_login submit-add">Confirm Changes</button></Link>

       <div className="view-live add-question">
            <h3>{title}</h3>
            {
               information.map((option , x)=>{
                if(x>1){
                  return (
                    <article key={'key'+x}>
                    <label htmlFor={'a' + x }>
                          <input type="radio" id={'a' +x } name={"option"+'-'} />
                          {information[x][2][1]}
                    </label>
                    <button className="add-new-option btn_login" id={information[x][1][1]}  
                    onClick={handleEdit}>edit</button>
                    <button className="add-new-option btn_login" id={information[x][0][1]} 
                    onClick={deleteOption}>delete</button>
                  </article> 
                  )
                }else{
                  return ( 
                    <article key={'key'+x}>
                       <label htmlFor={'a' + x }>
                             <input type="radio" id={'a' +x } name={"option"+'-'} />
                             {information[x][2][1]}
                       </label> 
                       <button className="add-new-option btn_login" id={information[x][1][1]}  
                        onClick={handleEdit}>edit</button>        
                     </article> 
                     
                  )
                }
              }) 
            }
        </div>
    </>
  )
}

export default EditQ