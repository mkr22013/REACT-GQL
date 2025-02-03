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
export const GET_COURSE_BY_ID = gql`
  query getCourseById($id: ID!) {
    coursesById(guid: $id) {
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
export const UPDATE_COURSE = gql`
  mutation UpdateCourse(
    $name: String!
    $subject: String!
    $instructorId: String!
  ) {
    updateCourse(
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
export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: String!) {
    deleteCourse(id: $id)
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
export const COURSE_CLIENT = new ApolloClient({
  uri: "http://localhost:5062/graphql/",
  cache: new InMemoryCache(),
});
