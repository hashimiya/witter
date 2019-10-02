import { VuexModule, Module, mutation, action } from "vuex-class-component";

declare let google: any;

@Module({ namespacedPath: "heatmap/", target: "nuxt" })
export class HeatmapStore extends VuexModule {
  private CENTER_LAT = 40;
  private CENTER_LNG = 140;
  private MAP_OPTIONS: google.maps.MapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(this.CENTER_LAT, this.CENTER_LNG),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoomControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: false,
    draggable: false,
    keyboardShortcuts: false,
    clickableIcons: false,
    disableDefaultUI: true,
    fullscreenControl: false,
    scrollwheel: false
  };

  private map: google.maps.Map | null = null;
  private heatmapData: google.maps.visualization.WeightedLocation[] = [];
  private heatmap: google.maps.visualization.HeatmapLayer | null = null;

  @mutation
  createMap(mapElementId: string): void {
    const map = new google.maps.Map(
      document.getElementById(mapElementId),
      this.MAP_OPTIONS
    );
    this.map = map;
  }

  @mutation
  createWeightedLocationMock(): void {
    const location = new google.maps.LatLng(35, 135);
    const weihtedLocation: google.maps.visualization.WeightedLocation = {
      location,
      weight: 0.5
    };
    this.heatmapData.push(weihtedLocation);
  }

  @mutation
  updateHeatmap(): void {
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatmapData
    });
    heatmap.setMap(this.map);
    this.heatmap = heatmap;
  }

  @action
  initialize(mapElementId: string): any {
    this.createMap(mapElementId);

    // todo: APIからの取得に置き換える
    this.createWeightedLocationMock();

    this.updateHeatmap();
  }

  get isEnabled(): boolean {
    return this.map !== null && this.heatmap !== null;
  }
}
