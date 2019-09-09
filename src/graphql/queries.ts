// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWeet = `query GetWeet($id: ID!) {
  getWeet(id: $id) {
    id
    token
    longitude
    latitude
  }
}
`;
export const listWeets = `query ListWeets(
  $filter: ModelWeetFilterInput
  $limit: Int
  $nextToken: String
) {
  listWeets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      token
      longitude
      latitude
    }
    nextToken
  }
}
`;
