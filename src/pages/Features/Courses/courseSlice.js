import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editStatus: { courseId: " ", text: " " },
  course: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      if (state.course.id == action.payload.id) {
        state.course.name = action.payload.name;
        state.course.subject = action.payload.subject;
        state.course.instructor = action.payload.instructor;
      }
    },

    editClicked: (state, action) => {
      const temp = {
        courseId: action.payload.courseId,
        text: action.payload.text,
      };

      state.editStatus = temp;
      state.course = action.payload.course;
    },
  },
});

export const { updateCourse, editClicked } = courseSlice.actions;

export default courseSlice.reducer;
