import { configureStore } from '@reduxjs/toolkit';
import Counter from "./reducer";


 const  Store = configureStore({
  reducer: {
    card:Counter
  }
})

export default Store;