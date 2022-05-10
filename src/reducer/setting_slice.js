import { createSlice } from "@reduxjs/toolkit"; 

export const settingSlice = createSlice({
    name: "setting",
    initialState: {
      value: {
        color: "white",
      },  },
      reducers: {
        change_color: (state, action) => {
          state.value.color = action.payload;
        },
      },
  
  });
  
  export const {change_color} =  settingSlice.actions;
  export default settingSlice.reducer;