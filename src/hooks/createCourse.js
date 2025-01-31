import { gql, useMutation } from "@apollo/client";

const courseClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const CREATE_COURSE = gql`
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

export const createCourse = (name, subject, instructorId) => {
  const [CreateCourse, { data, error, loading }] = useMutation(CREATE_COURSE, {
    variables: { name, subject, instructorId },
    client: courseClient,
  });
};
