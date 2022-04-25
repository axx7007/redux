import {configureStore} from '@reduxjs/toolkit'
import count from './counter'
export const store = configureStore({
    reducer:{
        counter: count,
        student: 'Student'
    }
});