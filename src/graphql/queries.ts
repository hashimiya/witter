// tslint:disable
// this is an auto generated file. This will be overwritten

export const listPrivateWeets = `query ListPrivateWeets(
  $apiKey: ID
  $id: ModelIDKeyConditionInput
  $filter: ModelPrivateWeetFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateWeets(
    apiKey: $apiKey
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      apiKey
      id
      longitude
      latitude
      createdAt
    }
    nextToken
  }
}
`;
export const listGlobalWeets = `query ListGlobalWeets(
  $filter: ModelGlobalWeetFilterInput
  $limit: Int
  $nextToken: String
) {
  listGlobalWeets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      longitude
      latitude
      createdAt
    }
    nextToken
  }
}
`;
