import {
    gql
  } from "@apollo/client";

export const LOGIN_OFFICER = gql`
  mutation LoginOfficer($input: LoginOfficerInput) {
    loginOfficer(input: $input) {
      token
    }
  }
`;