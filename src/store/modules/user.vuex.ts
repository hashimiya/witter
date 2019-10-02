import {
  VuexModule,
  Module,
  getter,
  mutation,
  action
} from "vuex-class-component";
import { Auth } from "aws-amplify";

@Module({ namespacedPath: "user/", target: "nuxt" })
export class UserStore extends VuexModule {
  @getter
  signedIn: boolean = false;

  @mutation
  enableSignedIn(): void {
    this.signedIn = true;
  }

  @action
  async fetchSignedIn(): Promise<void> {
    await Auth.currentUserInfo().then(data => {
      if (Boolean(data) === false) {
        return;
      }
      this.enableSignedIn();
    });
  }
}
