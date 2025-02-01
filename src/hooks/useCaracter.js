import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphqlQueries/CoursesQueries";

export const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return {
    error,
    data,
    loading,
  };
};
