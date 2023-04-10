import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import { admin_url, set_adminLogin } from '../../commen/admin_slice'

function profile({current_Admin , isLogin}) {
   const [toEdit, setToEdit] = useState(false)
   const adminName = useRef('')
   const adminPassword = useRef('')
   const dispatch = useDispatch()

   const updateAdminInf = useMutation(async (updatedAdmin)=>{
      return (await axios.patch
         (admin_url+"/"+updatedAdmin.id , updatedAdmin)).data
   } , {
      onSuccess : (data)=>{
         dispatch(set_adminLogin(data))
      }
   })

   const handleEdit = ()=>{
      setToEdit(true)
   }

   const submitChanges = ()=>{
      if(confirm("are you sure you want to update your information") && 
        adminName.current.value!="" &&  adminPassword.current.value!=""){
         const updatedAdmin = {
            id : current_Admin.id,         
            name : adminName.current.value,
            passid : adminPassword.current.value           
         }
         setToEdit(false)
         updateAdminInf.mutate(updatedAdmin)
      }else{
         adminName.current.value = current_Admin.name
         adminPassword.current.value = current_Admin.passid
         return
      }
   }

  return (
    
   <div className="admin-inhtmlFormation">
    <article>
        <p>
           <span className="bold-span">Name</span> :                    
           <input type="text" ref={adminName} defaultValue={current_Admin.name} 
           className="input-text" disabled={!toEdit} />
           <button className="btn-edit" onClick={handleEdit}>
            <i className='bx bxs-edit-alt'></i></button>
        </p>                               
    </article>
     <article>
        <p>
           <span className="bold-span">Passward</span> :                  
           <input type="text" ref={adminPassword}  defaultValue={current_Admin.passid}
           className="input-text" disabled={!toEdit} />
           <button className="btn-edit" onClick={handleEdit}>
            <i className='bx bxs-edit-alt'></i></button>
        </p>                              
    </article>
    { 
      toEdit &&
      <button onClick={submitChanges}>confirm</button>
    }
  </div>
  )
}

export default profile