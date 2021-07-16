import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        content: "First Item",
        finished: true,
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        content: "Second Item",
        finished: false,
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        content: "Third Item",
        finished: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      let newItem = {
        id: uuid.v4(),
        content: action.payload.content,
        finished: false,
      };
      state.tasks.push(newItem);
    },
    remove: (state, action) => {
      state.tasks = state.tasks.filter((val) => val.id != action.payload.id);
    },
    finish: (state, action) => {
      state.tasks.forEach((item) => {
        if (item.id == action.payload.id) {
          item.finished = true;
        }
      });
    },
  },
});

export const { add, remove, finish } = taskSlice.actions;

export default taskSlice.reducer;
