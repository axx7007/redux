import {createSlice} from '@reduxjs/toolkit'


export const counterSlicer = createSlice({
    name: "counter",
    initialState: {data:0},
    reducers:{
        increment: (state, action)=>{
            state.data+=1;
        },
        decrement: (state, action)=>{
            state.data-=1;
        }
    }
})
export const {increment, decrement} = counterSlicer.actions;
export default counterSlicer.reducer;