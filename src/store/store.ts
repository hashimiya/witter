import Vue from "vue";
import Vuex from "vuex";
import { CounterStore } from "./modules/counter.vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore)
  }
});

export const vxm = {
  counter: CounterStore.CreateProxy(store, CounterStore)
};
