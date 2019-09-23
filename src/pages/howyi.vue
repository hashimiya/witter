<template lang="pug">
  div
    h1.title
      | amplify 🐔 デモ 🐤 ページ
    p このページはmiddlewareにauthを設定しているから、サインインしないとみれないよ
    amplify-sign-out
    pre
      | エンドポイント {{endpoint}}
      |  {"latitude": "43.356170","longitude": "141.427382"} といった形式でJSONをPOSTすると記録されます
    p 自分のログ
    ul
      li(v-for="weet in privateWeets")
        | {{weet.createdAt}}: {{weet.latitude}}, {{weet.longitude}}
    p グローバル
    ul
      li(v-for="weet in globalWeets")
        | {{weet.createdAt}}: {{weet.latitude}}, {{weet.longitude}}

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { components } from "aws-amplify-vue";
import { WitterAPI, Weet } from "~/WitterAPI";

@Component({
  middleware: "auth",
  components: {
    ...components
  }
})
export default class Howyi extends Vue {
  privateWeets: Weet[] = [];
  globalWeets: Weet[] = [];
  endpoint: string = "";

  async load() {
    this.endpoint = await WitterAPI.getEndpoint();
    this.privateWeets = await WitterAPI.listPrivateWeets();
    this.globalWeets = await WitterAPI.listGlobalWeets();
  }

  mounted() {
    this.load();
  }
}
</script>
