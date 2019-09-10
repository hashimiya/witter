<template lang="pug">
  div.site
    WitterHeader
    section.section.has-background-light
      div.container
        nuxt.has-text-centered
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WitterHeader from "@/components/WitterHeader.vue";

@Component({
  components: {
    WitterHeader
  }
})
export default class Default extends Vue {}
</script>
