import {configureStore} from '@reduxjs/toolkit'
import todorReducers from './todoSlice'
import counterReducers from './counterSlice'

export default configureStore ({
    reducer:{
        todo: todorReducers,
        count:counterReducers
    }
})