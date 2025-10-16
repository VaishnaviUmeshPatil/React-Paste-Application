import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
  ?   JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

    
    addToPastes: (state, action) => {
      const paste = action.payload;
      //add a check --> in case if Paste is already exist
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },


    updateToPastes: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) =>
        item._id === paste._id)

      if(index >= 0) {
        state.pastes[index] = paste

        localStorage.setItem("pastes", JSON.stringify(state.pastes))

        toast.success("Paste updated successfully")
      }
    },


    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },


    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => 
      item._id === pasteId);

      if(index >= 0){
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste deleted successfully");
      }
    },
  },
});

// Action creators are generated for each case reducer functionq

export const { addToPastes, updateToPastes, incrresetToPaste, removeFromPastes  } = pasteSlice.actions

export default pasteSlice.reducer