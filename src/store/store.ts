import Vue from "vue";
import Vuex from "vuex";
import { CounterStore } from "./modules/counter.vuex";
import { HeatmapStore } from "./modules/heatmap.vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore),
    heatmap: HeatmapStore.ExtractVuexModule(HeatmapStore)
  }
});

export const vxm = {
  counter: CounterStore.CreateProxy(store, CounterStore),
  heatmap: HeatmapStore.CreateProxy(store, HeatmapStore)
};
