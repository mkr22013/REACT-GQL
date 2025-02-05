import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import getCourses from "../../hooks/getCourses";
import { useMutation } from "@apollo/client";
import {
  DELETE_COURSE,
  GET_COURSES,
  COURSE_CLIENT,
} from "../../graphqlQueries/CoursesQueries";
import { useDispatch } from "react-redux";
import { editClicked } from "../Features/Courses/courseSlice";

function GetAllCourses() {
  const { error, data, loading } = getCourses();
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  const [deleteCourse] = useMutation(DELETE_COURSE, {
    client: COURSE_CLIENT,
    refetchQueries: [{ query: GET_COURSES }],
    awaitRefetchQueries: true,
    onCompleted: () => {
      setMsg("Record successfully deleted...");
    },
    onError: (error) => {
      console.error("[GetAllCourses.deleteCourse] error", error);
    },
  });

  function DeleteCourse(id) {
    //set previous message clear
    deleteCourse({
      variables: {
        id: id,
      },
    });
  }

  const EditCourse = (id) => {
    const cData = data.courses.filter(function (el) {
      return el.id === id;
    });

    dispatch(editClicked({ courseId: id, text: "update", course: cData }));
  };

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <div>Something went wrong....</div>;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Courses Lists
            </h3>
            <p className="text-gray-600 mt-2">
              All available courses in the system
            </p>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Course Id</th>
                <th className="py-3 px-6">Instructor</th>
                <th className="py-3 px-6">Course Name</th>
                <th className="py-3 px-6">Subject</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {data.courses.map((course) => (
                <tr key={course.id}>
                  <td
                    id="courseId"
                    value={course.id}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {course.id}
                  </td>
                  <td
                    id="courseInstructorId"
                    value={course.instructorId}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {course.instructor.firstName} {course.instructor.lastName}
                  </td>
                  <td
                    id="courseName"
                    value={course.name}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {course.name}
                  </td>
                  <td
                    id="courseSubject"
                    value={course.subject}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {course.subject}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      onClick={() => EditCourse(course.id)}
                      href="#"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <a
                      onClick={(e) => DeleteCourse(course.id)}
                      href="#"
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            font: "message-box",
            color: "blue",
            fontFamily: "sans-serif",
            fontSize: "13px",
            margin: "10px",
          }}
        >
          {data && <p>{msg}</p>}
        </div>
      </div>
    </div>
  );
}

export default GetAllCourses;
