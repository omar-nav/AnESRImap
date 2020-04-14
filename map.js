require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
  var map = new Map({
    basemap: "streets-navigation-vector",
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-97.746858, 30.272853], // longitude, latitude
    zoom: 13,
  });
});
