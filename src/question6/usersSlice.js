import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push({username:action.payload, id: Date.now()}); // push works since IMMER
    },
    deleteUser: (state, action) => {
      const filteredUsers = state.list.filter(user => {
        return user.id !== action.payload
      })
      state.list = filteredUsers;
    }
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
