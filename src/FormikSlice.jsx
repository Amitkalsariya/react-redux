import { createSlice } from "@reduxjs/toolkit";

export const FormikSlice=createSlice({
    name:"formikcalc",
    initialState:{
        enter:{
            fname:"",
             lname:"",
             city:""   

        },
        test:[]
    },
    reducers:{
        addData:(state,action)=>{
                console.log(action);
                state.test.push(action.payload)
                
        },
        removeData:(state,action)=>{
            state.test.splice(action.payload,1)
            
        }
    }
})
export const {addData,removeData}=FormikSlice.actions
export default FormikSlice.reducer
