
import { createSlice } from '@reduxjs/toolkit'



//reducer
const counterSlice = createSlice({

  name: 'counter',
  initialState:{
    start:true,
    responseTime:null, //score
    openModal:false,
    visibility:"hidden",
  },
  reducers: {
    openModal: (state) => {
      state.openModal = true;
    },
    closeModal:(state)=>{
      state.openModal = false;
    },
    getStart: (state) => {
      state.start = false;
    },
    reSet:(state) =>{
      state.start = true;
      state.responseTime = null; //score
      state.openModal = false;
      state.visibility = "hidden";

      console.log("reSet is called");
    },
    setScore: (state, action) => {
      state.responseTime = action.payload;
    },
    showField:(state)=>{
      state.visibility = "visible";
    },
    hideField:(state)=>{
      state.visibility = "hideen";
    }
  }
})

// Action creators are generated for each case reducer function
export const { openModal,closeModal, getStart,reSet, setScore,showField,hideField } = counterSlice.actions;

export default counterSlice.reducer