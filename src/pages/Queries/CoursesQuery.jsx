import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import getCourses from "../../hooks/getCourses";

function GetAllCourses() {
  console.log("Fetching the data for all courses in GetAllCourses component");
  const { error, data, loading } = getCourses(true);
  console.log("All courses :", data);

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <div>Something went wrong....</div>;

  return (
    <div>
      <h1 className="Heading">Courses List</h1>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-blue-100 shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  ID
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Instructor Id
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Course Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Subject
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500"></p>
              </th>
            </tr>
          </thead>
          {data.courses.map((course) => {
            return (
              <tbody key={course.id}>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">{course.id}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                      {course.instructorId}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                      {course.name}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                      {course.subject}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <a
                      href="#"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default GetAllCourses;
