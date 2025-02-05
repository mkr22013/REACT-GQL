import { useLazyQuery } from "@apollo/client";
import {
  GET_COURSE_BY_ID,
  COURSE_CLIENT,
} from "../graphqlQueries/CoursesQueries";

function getCoursesById(courseId) {
  const [getCountriesById, { data, error, loading }] = useLazyQuery(
    GET_COURSE_BY_ID,
    {
      client: COURSE_CLIENT,
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
      variables: { guid: courseId },
    }
  );
  return {
    error,
    data,
    loading,
  };
}

export default getCoursesById;
