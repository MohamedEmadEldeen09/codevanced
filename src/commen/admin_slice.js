
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const questions_url = "https://codvanced-database.onrender.com/questions"
export const admin_url = 'https://codvanced-database.onrender.com/admins'

// //get 
// export const getAllQuestions = createAsyncThunk( 'questions/getdata' , async ()=>{
//   try {
//     const res = await fetch(questions_url)
//     if(!res.ok){
//         console.log(Error('could not load data'));
//     }
//     const data = await res.json()
//     return data
//   } catch (error) {
//      console.log(error);
//      return error
//   }
// })

// //add 
// export const addNewQuestion = createAsyncThunk( 'questions/addQ' , async (question)=>{
//   try {
//     //console.log(JSON.stringify(question));
//     const res = await fetch(questions_url , {
//       method :"POST",
//       body : JSON.stringify(question),
//       headers:{
//           "Content-Type" : "application/json; charset=UTF-8"
//       }    
//     })
//     if(!res.ok){
//         console.log(Error('could not load data'));
//         return null
//     }
//     const data = await res.json()
//     console.log(data);
//     return data
//   }catch (error) {
//      console.log(error);
//        return null
//   }
// })

// //delete
// export const deleteQuestion = createAsyncThunk('questuin/delete' , async (id)=>{
//   const del = await axios.delete(questions_url+"/"+id)
//   const getAllAgain = await axios.get(questions_url)
//   return getAllAgain.data
//   // return getAllQuestions()
// })

// //update
// export const updateQuestion = createAsyncThunk('questuin/delete' , async (inf)=>{
//   const del = await axios.put(questions_url+"/"+inf.id , inf.body)
//   return del.data
// })

//state
const initState = {
    questions : [],
    admin_login : false,
    current_Admin : {
      id : "",
      name : "",
      passid : ""
    },
    loading : false,
    q_title : "",
    information :[
      [
        ['idDel' , "delete1"],
        ['idEdit', "edit1"],
        ['valueText' , "option 1"],
        ['valueSelect' , "web"]
      ],
      [
        ['idDel' , "delete2"],
        ['idEdit', "edit2"],
        ['valueText' , "option 2"],
        ['valueSelect' , "web"]
      ]
    ],
    toSubmitEdit : false

}

// actions , reducers 
const adminSlice = createSlice({
    name:'admin',
    initialState:initState,
    reducers:{
     setQtitle : (state , action)=>{
       state.q_title = action.payload
     },
    //  setQoptions : (state , action)=>{
    //   state.q_options.push(action.payload)
    // },
    pop_option : (state , action)=>{
      console.log(state.information[2][0][1]);
      console.log(action.payload);
      state.information =  state.information.filter(inf => inf[0][1] !== action.payload)
    },
    push_information :(state , action)=>{
      state.information.push(action.payload)
    },
    set_information:(state , action)=>{
      state.information = action.payload 
    },
    reset_Information:(state)=>{
      state.information = [
        [
          ['idDel' , "delete1"],
          ['idEdit', "edit1"],
          ['valueText' , "option 1"],
          ['valueSelect' , "web"]
        ],
        [
          ['idDel' , "delete2"],
          ['idEdit', "edit2"],
          ['valueText' , "option 2"],
          ['valueSelect' , "web"]
        ]
      ] 
    },
    set_EditToTrue : (state)=>{
      state.toSubmitEdit = true
    },
    set_EditToFalse : (state , action)=>{
      state.toSubmitEdit = false
      if(action.payload !== 'cancel'){
        let newInformation = []
        for (let i = 0; i < state.information.length; i++) {  
          let nf = []     
          if(state.information[i][1][1] === action.payload[0]){
            nf = [
              ['idDel' , state.information[i][0][1]],
              ['idEdit', state.information[i][1][1]],
              ['valueText' , action.payload[1]],
              ['valueSelect' , action.payload[2]]
            ]
          }else{
            nf  = state.information[i]
          }
          newInformation.push(nf)
        }
        console.log(newInformation);
        state.information = newInformation
      }   
    },
    refrechTheQuestions : (state)=>{
      state.questions = []
    },
    resetTheQuestions : (state , action)=>{
      state.questions = action.payload
    },
    // set_adminName : (state , action)=>{
    //  state.admin_Name = action.payload
    // },
    set_adminLogin : (state , action)=>{
      state.admin_login = true
      state.current_Admin = action.payload
    },
    // set_Questions :(state , action)=>{
    //   state.questions = action.payload 
    // }
   },   
  //   extraReducers:{
  //     [getAllQuestions.pending] : (state)=>{
  //       state.loading = true
  //     },
  //     [getAllQuestions.fulfilled]:(state , action)=>{
  //       state.loading = false
  //       state.questions = action.payload       
  //     },
  //     [addNewQuestion.pending] : (state)=>{
  //       state.loading = true
  //     },
  //     [addNewQuestion.fulfilled]:(state)=>{
  //       state.loading = false      
  //     },
  //     [deleteQuestion.pending] : (state)=>{
  //       state.loading = true
  //     },
  //     [deleteQuestion.fulfilled] : (state ,action)=>{
  //       state.loading = false
  //       state.questions = action.payload
  //       console.log(state.questions);
  //     },
  //     [updateQuestion.pending] : (state)=>{
  //       state.loading = true
  //     },
  //     [updateQuestion.fulfilled] : (state)=>{
  //       state.loading = false
  //     }
      
  //   }

})

export const {setQtitle , setQoptions , pop_option , push_option , push_information,
  set_EditToFalse , set_EditToTrue , set_information,refrechTheQuestions , 
  reset_Information , resetTheQuestions ,set_adminName, set_Questions ,set_adminLogin} 
  = adminSlice.actions
export default adminSlice.reducer