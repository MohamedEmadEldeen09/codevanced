import { createSlice } from "@reduxjs/toolkit";


const initState = {
   startTest : false,
   testFinish:false,
   indexQ : 0,
   answers : [],
   result : "",
   userData : localStorage.getItem("codevanced_inf") || {}
}
export const userSlice = createSlice({
  name : 'user' ,
  initialState : initState ,
  reducers : {
    nextQuestion :(state , action)=>{
      let targetOption = action.payload[1][state.indexQ]?.answers.filter((option)=>{
         return option.value === action.payload[0]
      })
      state.answers = [...state.answers ,targetOption[0]]
      if(state.indexQ == action.payload[1].length-1){
        state.indexQ =0
        state.testFinish = true    
        let sumB = 0 , sumD= 0 , sumF =0 , sumA =0
        state.answers.forEach((answer)=>{
          if(answer.key == "backend") sumB +=1
          if(answer.key == "frontend") sumF +=1
          if(answer.key == "data science") sumD +=1
          if(answer.key == "android") sumA +=1

        })
        let score = [sumB,sumF,sumD].sort().reverse()[0]
        if(score == sumB) state.result = 'BackEnd' + " Development"
        if(score == sumF) state.result = 'FrontEnd' + " Development"
        if(score == sumD) state.result = 'Data Science'
        if(score == sumA) state.result = 'Android Development'
         
      }else{
        state.indexQ += 1
      }
    },
    setStart : (state)=>{
      state.startTest = true
    },
    resetTest: (state)=>{
      state.startTest = false
      state.testFinish = false
    },
    setUserData : (state , action)=>{
      state.userData = action.payload
    }
  }
})

export const {setStart  , nextQuestion ,resetTest, setUserData}  = userSlice.actions
export default userSlice.reducer