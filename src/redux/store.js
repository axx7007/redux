import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        count: "Count",
        student: 'Student'
    }
});