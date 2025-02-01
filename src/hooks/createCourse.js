import { useMutation } from "@apollo/client";
import { CREATE_COURSE } from "../graphqlQueries/CoursesQueries";

const courseClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const createCourse = (name, subject, instructorId) => {
  const [CreateCourse, { data, error, loading }] = useMutation(CREATE_COURSE, {
    variables: { name, subject, instructorId },
    client: courseClient,
  });
};
