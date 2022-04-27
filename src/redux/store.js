import {configureStore} from '@reduxjs/toolkit'
import counter from './counter'
import Students from './Student'
export const store = configureStore({
    reducer:{
        count: counter,
        students: Students
    }
})