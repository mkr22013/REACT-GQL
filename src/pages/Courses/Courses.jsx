import { useForm } from "react-hook-form";
import { gql, useMutation, ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const courseClient = new ApolloClient({
  uri: "http://localhost:7227/graphQL/",
  cache: new InMemoryCache(),
});

const Subject = {
  MATH: "Math",
  SCIENCE: "Science",
  HISTORY: "History",
};
const CREATE_COURSE = gql`
  mutation createCourse(
    $name: String!
    $subject: Subject.SCIENCE
    $instructorId: String!
  ) {
    createCourse(
      courseInput: {
        Name: $name
        subject: $subject
        instructorId: $instructorId
      }
    ) {
      id
      subject
      name
      instructorId
    }
  }
`;

export default function Courses() {
  const { register, handleSubmit } = useForm();
  //   const [cName, setName] = useState("Palientology1234");
  //   const [cSubject, setSubject] = useState("SCIENCE");
  //   const [cInstructor, setInstructor] = useState(
  //     "4363a05f-d0b1-41dd-a4da-4487a677ebc1"
  //   );

  const [createCourse, { data, loading, error }] = useMutation(CREATE_COURSE, {
    variables: {
      name: "Palientology12345",
      subject: SCIENCE,
      instructorId: "4363a05f-d0b1-41dd-a4da-4487a677ebc1",
    },
    client: courseClient,
  });

  const onSubmit = (d) => {
    console.log(d);

    // setName(data.CourseName);
    // setSubject(data.CourseSubject);
    // setInstructor(data.CourseInstructor);

    // console.log(cName);
    // console.log(cSubject);
    // console.log(cInstructor);
    createCourse();

    if (error) return <p> Error: {error.message}</p>;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseName", { required: true, maxLength: 20 })}
            type="text"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Course Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseSubject", { required: true, maxLength: 40 })}
            type="text"
            id="floating_subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("CourseInstructor", { required: true, maxLength: 40 })}
            type="text"
            id="floating_instructor"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_instructor"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Instructor
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
