import {configureStore } from '@reduxjs/toolkit'
import Data from '../redux/features/ProductsSlice'

export const store = configureStore({
    reducer:{
        data:Data,
        
    }
})