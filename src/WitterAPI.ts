import {API, Auth, graphqlOperation} from "aws-amplify";
import * as queries from "@/graphql/queries";
import awsconfig from "@/aws-exports";

export type Weet = {
  longitude: string;
  latitude: string;
  createdAt: string;
};

export class WitterAPI {
  static async getEndpoint(): Promise<string> {
    const apiKey = await this.getApiKey();
    // @ts-ignore
    return `${awsconfig.aws_cloud_logic_custom[0].endpoint}/webhook?apiKey=${apiKey}`;
  }

  private static async getApiKey(): Promise<string> {
    const result = await Auth.currentUserInfo();
    // @ts-ignore
    return result.attributes.sub;
  }

  static async listPrivateWeets(): Promise<Weet[]> {
    const result = await API.graphql(graphqlOperation(queries.listPrivateWeets));
    // @ts-ignore
    return result.data.listPrivateWeets.items
  }

  static async listGlobalWeets(): Promise<Weet[]> {
    const result = await API.graphql(graphqlOperation(queries.listGlobalWeets));
    // @ts-ignore
    return result.data.listGlobalWeets.items
  }
}
