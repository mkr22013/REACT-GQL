import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editClicked: { courseId: " ", text: " " },
  courses: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      state.courses.map((course) => {
        if (course.id == action.payload.id) {
          course.name = action.payload.name;
          course.subject = action.payload.subject;
          course.instructor = action.payload.instructor;
        }
      });
    },

    editClicked: (state, action) => {
      console.log("Edit Action:", action);
      const temp = {
        courseId: action.payload.courseId,
        text: action.payload.text,
      };

      state.editClicked = temp;
    },
  },
});

export const { updateCourse, editClicked } = courseSlice.actions;

export default courseSlice.reducer;
