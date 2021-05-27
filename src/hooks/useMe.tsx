import { gql, useQuery } from "@apollo/client";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
    }
  }
`;

export const useMe = () => {
  return useQuery(ME_QUERY);
};
