<template lang="pug">
  div
    nav.navbar.has-background-primary
      div.navbar-brand
        nuxt-link.navbar-item(to="/")
          | Witter (icon 的な) へっだー
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
