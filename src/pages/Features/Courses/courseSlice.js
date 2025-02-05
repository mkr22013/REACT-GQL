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
      state.course.map((course) => {
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

      state.editStatus = temp;
      state.course = action.payload.course;
    },
  },
});

export const { updateCourse, editClicked } = courseSlice.actions;

export default courseSlice.reducer;
