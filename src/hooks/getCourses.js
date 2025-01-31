import { gql, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";

const courseClient = new ApolloClient({
  uri: "http://localhost:5062/graphql/",
  cache: new InMemoryCache(),
});

const GET_COURSES = gql`
  query {
    courses {
      id
      name
      subject
      instructorId
      instructor {
        id
        firstName
        lastName
        salary
      }
      students {
        id
        firstName
        lastName
        gpa
      }
    }
  }
`;

function getCourses() {
  const { data, error, loading } = useQuery(GET_COURSES, {
    client: courseClient,
  });

  return {
    error,
    data,
    loading,
  };
}

export default getCourses;
