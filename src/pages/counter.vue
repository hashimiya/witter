<template lang="pug">
  div
    h1.title
      | サンプル カウンター
    WitterCounter
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WitterCounter from "@/components/WitterCounter.vue";

@Component({
  components: {
    WitterCounter
  }
})
export default class Counter extends Vue {}
</script>
