import Vue from "vue";
import Vuex from "vuex";
import { CounterStore } from "./modules/counter.vuex";
import { UserStore } from "./modules/user.vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore),
    user: UserStore.ExtractVuexModule(UserStore)
  }
});

export const vxm = {
  counter: CounterStore.CreateProxy(store, CounterStore),
  user: UserStore.CreateProxy(store, UserStore)
};
