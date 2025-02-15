import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import GetAllCourses from "../Queries/CoursesQuery";
import { useState, useEffect } from "react";
import {
  GET_COURSES,
  CREATE_COURSE,
  UPDATE_COURSE,
  COURSE_CLIENT,
} from "../../graphqlQueries/CoursesQueries";
import { useSelector, useDispatch } from "react-redux";
import { editClicked } from "../Features/Courses/courseSlice";
import SuccessModal from "../Popup/Popup";
import ErrorPopup from "../errorpopup/ErrorPopup";

export default function Courses() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitSuccessful },
  } = useForm();

  const editStatus = useSelector((state) => state.editStatus);
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setShowError] = useState(false);

  let cName = "";
  let cSubject = "";
  let cInstructor = "";

  const [createCourse] = useMutation(CREATE_COURSE, {
    client: COURSE_CLIENT,
    refetchQueries: [{ query: GET_COURSES }],
    awaitRefetchQueries: true,
    onCompleted: () => {
      setMsg("Record Successfully Created");
    },
    onError: (error) => {
      console.error("[Courses.createCourse] error", error);
      throw error;
    },
  });

  const [updateCourse] = useMutation(UPDATE_COURSE, {
    client: COURSE_CLIENT,
    refetchQueries: [{ query: GET_COURSES }],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      if (data) {
        setMsg("Record Successfully Updated");
        //reset the cache
        dispatch(editClicked({ courseId: "", text: " " }));
      }
    },
    onError: (error) => {
      console.error("[Courses.updateCourse] error", error);
      throw error;
    },
  });

  const onSubmit = async (d) => {
    cName = d.CourseName;
    cSubject = d.CourseSubject;
    cInstructor = d.CourseInstructor;

    if (editStatus.text === " " || editStatus.text === undefined) {
      try {
        setShowPopup(false);
        setShowError(false);
        await createCourse({
          variables: {
            name: cName,
            subject: cSubject,
            instructorId: cInstructor,
          },
        });
        setShowPopup(true);
      } catch (error) {
        setShowError(true);
        throw error;
      }
    } else {
      try {
        setShowPopup(false);
        setShowError(false);
        await updateCourse({
          variables: {
            id: editStatus.courseId,
            name: cName,
            subject: cSubject,
            instructorId: cInstructor,
          },
        });
        setShowPopup(true);
      } catch (error) {
        setShowError(true);
        throw error;
      }
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(); // Clear the form after successful submission
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (editStatus.text === " " || editStatus.text === undefined) {
      return;
    }
    //Read the store and set the form values
    setValue("CourseName", course[0].name);
    setValue("CourseSubject", course[0].subject);
    setValue("CourseInstructor", course[0].instructorId);
  }, [editStatus]);

  return (
    <div>
      <div>
        <h3
          className="text-gray-800 text-xl font-bold sm:text-2xl"
          style={{ textAlign: "center", width: "1100px" }}
        >
          Add New Course
        </h3>
      </div>
      <div style={{ padding: "20px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseName", { required: true, maxLength: 20 })}
            type="text"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-3 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-400 transform -translate-y-6 scale-80 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Course Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseSubject", { required: true, maxLength: 40 })}
            type="text"
            id="floating_subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-3 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="floating_subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-400 transform -translate-y-6 scale-80 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseInstructor", { required: true, maxLength: 40 })}
            type="text"
            id="floating_instructor"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-3 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="floating_instructor"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-400 transform -translate-y-6 scale-80 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Instructor
          </label>
        </div>
        <div
          style={{
            font: "message-box",
            color: "blue",
            fontFamily: "sans-serif",
            fontSize: "13px",
          }}
        ></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6"
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={() => reset()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Reset
        </button>
      </form>
      <div>
        <GetAllCourses />
      </div>
      {showPopup && (
        <div>
          <SuccessModal message={msg} />
        </div>
      )}
      {showError && (
        <div>
          <ErrorPopup message="Internal Server Error. Please check your input and try again..." />
        </div>
      )}
    </div>
  );
}
