<template lang="pug">
  div.site
    WitterHeader
    section.section.has-background-light
      div.container
        nuxt.has-text-centered
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import WitterHeader from "@/components/WitterHeader.vue";

@Component({
  components: {
    WitterHeader
  },
  created() {
    AmplifyEventBus.$on("authState", (info: string) => {
      if (info === "signedIn") {
        this.$router.push("/howyi");
      } else if (info === "signedOut") {
        this.$router.push("/signin");
      }
    });
  }
})
export default class Default extends Vue {}
</script>
