import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk(
    "getStudent",
    async()=>{
        return fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
    }
)

export const studentSlicer = createSlice({
    name:"Students",
    initialState: {student: [], status: ''},
    extraReducers:{
        [getStudent.pending]: (state, action)=>{
            state.status = "pending";
        },
        [getStudent.fulfilled]: (state, action)=>{
            state.status="succes";
            state.student = action.payload
        },
        [getStudent.rejected]: (state, action)=>{
            state.status="failed"
        }  

    }
})

export default studentSlicer.reducer