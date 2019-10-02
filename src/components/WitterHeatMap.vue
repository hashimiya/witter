<template lang="pug">
  div#map
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {} from "googlemaps";
import { vxm } from "@/store/store";

@Component
export default class WitterHeatMap extends Vue {
  mounted(): void {
    if (vxm.heatmap.isEnabled === false) {
      vxm.heatmap.initialize("map");
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
