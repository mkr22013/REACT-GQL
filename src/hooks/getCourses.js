import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_COURSES, courseClient } from "../graphqlQueries/CoursesQueries";

function getCourses() {
  const { data, error, loading } = useQuery(GET_COURSES, {
    client: courseClient,
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
