/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWeetInput = {
  id?: string | null,
  token: string,
  longitude?: string | null,
  latitude?: string | null,
};

export type UpdateWeetInput = {
  id: string,
  token?: string | null,
  longitude?: string | null,
  latitude?: string | null,
};

export type DeleteWeetInput = {
  id?: string | null,
};

export type ModelWeetFilterInput = {
  id?: ModelIDFilterInput | null,
  token?: ModelIDFilterInput | null,
  longitude?: ModelStringFilterInput | null,
  latitude?: ModelStringFilterInput | null,
  and?: Array< ModelWeetFilterInput | null > | null,
  or?: Array< ModelWeetFilterInput | null > | null,
  not?: ModelWeetFilterInput | null,
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

export type CreateWeetMutationVariables = {
  input: CreateWeetInput,
};

export type CreateWeetMutation = {
  createWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type UpdateWeetMutationVariables = {
  input: UpdateWeetInput,
};

export type UpdateWeetMutation = {
  updateWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type DeleteWeetMutationVariables = {
  input: DeleteWeetInput,
};

export type DeleteWeetMutation = {
  deleteWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type GetWeetQueryVariables = {
  id: string,
};

export type GetWeetQuery = {
  getWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type ListWeetsQueryVariables = {
  filter?: ModelWeetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeetsQuery = {
  listWeets:  {
    __typename: "ModelWeetConnection",
    items:  Array< {
      __typename: "Weet",
      id: string,
      token: string,
      longitude: string | null,
      latitude: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWeetSubscription = {
  onCreateWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type OnUpdateWeetSubscription = {
  onUpdateWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};

export type OnDeleteWeetSubscription = {
  onDeleteWeet:  {
    __typename: "Weet",
    id: string,
    token: string,
    longitude: string | null,
    latitude: string | null,
  } | null,
};
