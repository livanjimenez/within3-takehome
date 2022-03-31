/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunches
// ====================================================

export interface GetLaunches_launches {
  __typename: "Launch";
  id: string | null;
  details: string | null;
  mission_name: string | null;
}

export interface GetLaunches {
  launches: (GetLaunches_launches | null)[] | null;
}

export interface GetLaunchesVariables {
  limit?: number | null;
}
