import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_COURSES, COURSE_CLIENT } from "../graphqlQueries/CoursesQueries";

function getCourses() {
  const { data, error, loading } = useQuery(GET_COURSES, {
    client: COURSE_CLIENT,
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  });
  return {
    error,
    data,
    loading,
  };
}

export default getCourses;
