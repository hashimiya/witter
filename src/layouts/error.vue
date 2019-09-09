<template lang="pug">
  div
   | 404
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Error extends Vue {
  mounted() {
    this.$router.push("/");
  }
}
</script>
