<template lang="pug">
  div
    h1.title
      | トップページ的な
    WitterHeatMap
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WitterHeatMap from "@/components/WitterHeatMap.vue";

@Component({
  components: {
    WitterHeatMap
  }
})
export default class Index extends Vue {}
</script>
