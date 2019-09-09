<template lang="pug">
  div
    h1.title
      | amplify 🐔 デモ 🐤 ページ
    p このページはmiddlewareにauthを設定しているから、サインインしないとみれないよ
    amplify-sign-out
    ul
      li(v-for="item in items")
        | {{item.latitude}}, {{item.longitude}}

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { components } from "aws-amplify-vue";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";

@Component({
  middleware: "auth",
  components: {
    ...components
  }
})
export default class Howyi extends Vue {
  items: any = [{ message: "Foo" }, { message: "Bar" }];

  async load() {
    const result = await API.graphql(graphqlOperation(queries.listWeets));
    console.log(result);
    // @ts-ignore
    this.items = result.data.listWeets.items;
  }

  mounted() {
    this.load();
  }
}
</script>
