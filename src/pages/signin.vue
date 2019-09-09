<template lang="pug">
  no-ssr
    amplify-authenticator
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { components } from "aws-amplify-vue";

@Component({
  components: {
    components
  }
})
export default class SignIn extends Vue {}
</script>
