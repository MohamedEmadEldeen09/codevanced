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
      //console.log( state.answers);
      //console.log(state.indexQ); 
      if(state.indexQ == action.payload[1].length-1){
        state.indexQ =0
        state.testFinish = true    
        let sumW = 0 , sumD= 0 , sumM =0 , sumS=0
        state.answers.forEach((answer)=>{
          if(answer.key == "web") sumW +=1
          if(answer.key == "desktop") sumD +=1
          if(answer.key == "mobile") sumM +=1
          if(answer.key == "security") sumS +=1
        })
        //console.log([sumW,sumD,sumM,sumS]);
        let score = [sumW,sumD,sumM,sumS].sort().reverse()[0]
        if(score == sumW) state.result = 'Web' + " Development"
        if(score == sumD) state.result = 'Desktop' + " Development"
        if(score == sumS) state.result = 'Security' + " Development"
        if(score == sumM) state.result = 'Mobile' + " Development"
         
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