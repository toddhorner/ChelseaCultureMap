/******** config ********/

const base_map_URL = 'https://api.mapbox.com/styles/v1/tohorner/cjhijn5ba1zon2rpelkgflt7y/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9ob3JuZXIiLCJhIjoiY2l6NGFoeXIxMDRscDMycGd2dzVzZTg3NyJ9.Vfe_mGvZ-mHldkO0x2gXEw';
const feature_layer_URL = 'https://services3.arcgis.com/U4SbXhYNLOfN36SP/arcgis/rest/services/View_for_Shortlist/FeatureServer/0'

/**
 * A dictionary for mapping ArcGIS Online field names to HTML-safe strings
 * @type {Object}
 */
const asset_categories = {
  'Architecture': 'architecture',
  'Landmark or monument': 'landmark',
  'Public art': 'public-art',
  'Creative industry': 'creative-industry',
  'Park or open space': 'park',
  'Cultural facility': 'cultural-facility',
  'Food': 'food',
  'Programming or event': 'programming'
}

const palette = {
  "architecture": "#2a3e50", // Dark blue
  "landmark": "#8C2A23", // Sienna
  "public-art": "#fc4349", // Pink
  "creative-industry": "#6dbcdb", // Sky blue
  "food": "#2E6E24", // olive
  "cultural-facility": "#ffb733", // Gold
  "park": "#1a9481", // Teal
  "programming": "#62358C" // Purple
}

/**
 * The field name in the ArcGIS Online feature service
 * that contains the major category type
 * @type {String}
 */
const category_field = "TAB_NAME"

/******** end config ********/

// Initialize the Map
var mymap = L.map('chelsea_leaflet',{
  zoomControl : false,
  scrollWheelZoom: false
})

//Add zoom
var zoom = new L.Control.Zoom({ position: 'bottomright' }).addTo(mymap);

mymap.setView([42.39, -71.035], 16);

// Add the basemap
L.tileLayer(base_map_URL, {
  maxZoom: 21
}).addTo(mymap);

// Move zoom control to lower left corner
// L.Control.setPosition('bottomright');

let layers = {};

// Make a cluster layer for each type of asset category
for (let cat in asset_categories) {

  let icon = L.icon({
    iconUrl: "assets/icon/1x/" + asset_categories[cat] + ".png",
    iconSize: [15, 15]
  });

  // this function defines how the icons
  // representing  clusters are created
  let catClusterFunction = clusterFunction(asset_categories[cat])

  let layer = L.esri.Cluster.featureLayer({
    url: feature_layer_URL,
    where: category_field + " = '" + cat + "' AND STATUS = 1", // TAB_NAME
    iconCreateFunction: catClusterFunction,
    pointToLayer: function(geojson, latlng) {
      return L.marker(latlng, {
        icon: icon
      });
    }
  }).addTo(mymap)

  layers[asset_categories[cat]] = layer;

  let popup = L.popup({
    maxWidth:400,
    maxHeight:400,
    keepInView:true,
    className: "asset_popup"
  }).setContent(function(layer) {

    let feature_props = layer.feature.properties;
    let template = "<h3>{NAME}</h3>"

    if (feature_props['PIC_URL']){
      template = template + '<img src={PIC_URL}>';
    }

    if (feature_props['DESC1']){
      template = template + '<p>{DESC1}</p>';
    }

    if (feature_props['TAB_NAME']){
      template = template + '<p><i>Cateogry: {TAB_NAME}</p></i>';
    }

    if (feature_props['WEBSITE']){
      template = template + '<a href={WEBSITE} class="button small special">More info</a>';
    }

    return L.Util.template(template, layer.feature.properties)
  })

  layer.bindPopup(popup);

}

/***********Layers control***************/


// Swap out html-safe asset category labels for readable labels
let asset_categories_reversed = {}
for (let key in asset_categories){
  asset_categories_reversed[asset_categories[key]] = key
}

let label_layers = {}
for (let key in layers){
  label_layers[asset_categories_reversed[key]] = layers[key]
}

var layer_widget = L.control.layers(null, label_layers).addTo(mymap);

//Adjust colors of layer layer_widget

let palette_readable = {}
for (let key in palette){
  palette_readable[asset_categories_reversed[key]] = palette[key]
}

for (let key in palette_readable) {
  selector_string = "div.leaflet-control-layers-overlays span:contains('" + key + "')"
  $(selector_string).css("color",palette_readable[key]);
}

//Change control icon

$(".leaflet-control-layers-toggle").html("<h3>Cultural Asset Categories</h3>")

/** HELPER FUNCTIONS **/

/**
 * Closure for assigning classes to icons according
 * to asset category
 * @param  {string} category [description]
 * @return {function}          [description]
 */
function clusterFunction(category) {
  return function(cluster) {
    // get the number of items in the cluster
    var count = cluster.getChildCount();

    // figure out how many digits long the number is
    var digits = (count + '').length;

    // return a new L.DivIcon with our classes so we can
    // style them with CSS. Take a look at the CSS in
    // the <head> to see these styles. You have to set
    // iconSize to null if you want to use CSS to set the
    // width and height.
    return new L.divIcon({
      html: count,
      className: 'cluster digits-' + digits + "-" + category,
      iconSize: null
    });
  }
}
