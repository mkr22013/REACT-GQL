import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
export const GET_COURSES = gql`
  query getCourses {
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

export const CREATE_COURSE = gql`
  mutation CreateCourse(
    $name: String!
    $subject: String!
    $instructorId: String!
  ) {
    createCourse(
      courseInput: {
        name: $name
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

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      image
      gender
      episode {
        id
        name
        episode
      }
      origin {
        id
      }
    }
  }
`;

export const courseClient = new ApolloClient({
  uri: "http://localhost:5062/graphql/",
  cache: new InMemoryCache(),
});
