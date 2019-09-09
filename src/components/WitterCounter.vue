<template lang="pug">
  div
    p {{ count }}
    button.button.is-danger(@click="plus") +
    button.button.is-info(@click="minus") -
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "@/store/store";

@Component
export default class WitterCounter extends Vue {
  get count(): number {
    return vxm.counter.count;
  }

  plus() {
    vxm.counter.increment();
  }

  minus() {
    vxm.counter.decrement();
  }
}
</script>
