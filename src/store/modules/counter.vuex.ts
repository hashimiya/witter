import {
  VuexModule,
  mutation,
  action,
  getter,
  Module
} from "vuex-class-component";

@Module({ namespacedPath: "counter/", target: "nuxt" })
export class CounterStore extends VuexModule {
  @getter
  public count: number = 0;

  @mutation
  public increment() {
    this.count++;
  }

  @mutation
  public decrement() {
    this.count--;
  }

  @action()
  public incrementIfOdd() {
    if ((this.count + 1) % 2 === 0) {
      this.increment();
    }
  }

  @action()
  public incrementAsync() {
    return setTimeout(() => this.increment(), 1000);
  }
}
