/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPrivateWeetFilterInput = {
  apiKey?: ModelIDFilterInput | null,
  id?: ModelIDFilterInput | null,
  longitude?: ModelStringFilterInput | null,
  latitude?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelPrivateWeetFilterInput | null > | null,
  or?: Array< ModelPrivateWeetFilterInput | null > | null,
  not?: ModelPrivateWeetFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGlobalWeetFilterInput = {
  id?: ModelIDFilterInput | null,
  longitude?: ModelStringFilterInput | null,
  latitude?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelGlobalWeetFilterInput | null > | null,
  or?: Array< ModelGlobalWeetFilterInput | null > | null,
  not?: ModelGlobalWeetFilterInput | null,
};

export type ListPrivateWeetsQueryVariables = {
  apiKey?: string | null,
  id?: ModelIDKeyConditionInput | null,
  filter?: ModelPrivateWeetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateWeetsQuery = {
  listPrivateWeets:  {
    __typename: "ModelPrivateWeetConnection",
    items:  Array< {
      __typename: "PrivateWeet",
      apiKey: string,
      id: string,
      longitude: string | null,
      latitude: string | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListGlobalWeetsQueryVariables = {
  filter?: ModelGlobalWeetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGlobalWeetsQuery = {
  listGlobalWeets:  {
    __typename: "ModelGlobalWeetConnection",
    items:  Array< {
      __typename: "GlobalWeet",
      id: string,
      longitude: string | null,
      latitude: string | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
