<template lang="pug">
  div#map
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import {} from "googlemaps";

declare let google: any;

@Component
export default class WitterHeatMap extends Vue {
  private map: google.maps.Map | null = null;
  private heatmapData: google.maps.visualization.WeightedLocation[] = [];
  private heatmap: google.maps.visualization.HeatmapLayer | null = null;

  mounted(): void {
    // todo: 現在値の取得
    const lat = 10;
    const lng = 10;
    const latLng = new google.maps.LatLng(lat, lng);
    const options: google.maps.MapOptions = {
      // todo: オプションの調整（ズームぐらいできてもいいかもしれないなど）
      zoom: 8,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoomControl: false,
      mapTypeControl: false
    };
    const map = new google.maps.Map(document.getElementById("map"), options);
    this.map = map;

    // todo: APIからの取得に置き換える
    this.createMock();

    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatmapData
    });
    heatmap.setMap(this.map);
    this.heatmap = heatmap;

    // デモ用でクリックで熱くなるように
    map.addListener("click", this.pushHeatmap);
  }

  @Watch("heatmapData")
  onHeatmapDataChanged(newData: any[]): void {
    if (this.heatmap === null) {
      return;
    }
    this.heatmap.setData(newData);
  }

  //
  // 仮メソッド群
  //
  private createMock(): void {
    const rnd = (min: number, max: number): number => {
      return Math.random() * (max - min) + min;
    };
    const latMin = 9.127901954866381;
    const latMax = 11.11781177686728;
    const lngMin = 7.8851318359375;
    const lngMax = 11.944580078125;

    for (let i = 0; i < 100; i++) {
      const location = new google.maps.LatLng(
        rnd(latMin, latMax),
        rnd(lngMin, lngMax)
      );
      const options: google.maps.visualization.WeightedLocation = {
        location,
        // memo: 0.1 単位で設定できて 1 超えたら赤くなる
        // 近い位置の合算は google map api の方が勝手にやってくれるので楽
        weight: 0.5
      };
      this.heatmapData.push(options);
    }
  }
  private pushHeatmap({ latLng }: any): void {
    const location = new google.maps.LatLng(latLng.lat(), latLng.lng());
    const options: google.maps.visualization.WeightedLocation = {
      location,
      weight: 1
    };
    this.heatmapData.push(options);
    console.log(this.heatmapData);
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
