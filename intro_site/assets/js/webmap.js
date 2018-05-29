require([
  "dojo/parser",
  "dojo/ready",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane",
  "dojo/dom",
  "dojo/dom-construct",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/map",
  "esri/urlUtils",
  "esri/arcgis/utils",
  "esri/dijit/Legend",
  "esri/dijit/Scalebar",
  "esri/dijit/Popup",
  "esri/dijit/PopupTemplate",
  "dojo/domReady!"
], function(
  parser,
  ready,
  BorderContainer,
  ContentPane,
  dom,
  domConstruct,
  SimpleMarkerSymbol,
  Map,
  urlUtils,
  arcgisUtils,
  Legend,
  Scalebar,
  Popup,
  PopupTemplate
) {
  ready(function() {

    parser.parse();

    var popupTemplate = new PopupTemplate({
           title: "{address}",
           fieldInfos: [
             {
               fieldName: "req_type",
               visible: true,
               label: "Type"
             },
             {
               fieldName: "req_date",
               visible: true,
               label: "Date",
               format: {
                 dateFormat: 'shortDateShortTime'
               }
             }
           ],
           showAttachments: true
         });

    var popupOptions = {
      marginLeft: "20",
      marginTop: "20"
    };
    //create a popup to replace the map's info window
    var popup = new Popup(popupOptions, domConstruct.create("div"));

    //if accessing webmap from a portal outside of ArcGIS Online, uncomment and replace path with portal URL
    //arcgisUtils.arcgisUrl = "https://pathto/portal/sharing/content/items";
    arcgisUtils.createMap("2753801f1c7347309c89006792f79229", "map", {
      mapOptions: {
        // TO DO: add pop-up!
      },
    }).then(function(response) {
      //update the app

      var map = response.map;



      //add the scalebar
      // var scalebar = new Scalebar({
      //   map: map,
      //   scalebarUnit: "english"
      // });





      //add the legend. Note that we use the utility method getLegendLayers to get
      //the layers to display in the legend from the createMap response.
      // var legendLayers = arcgisUtils.getLegendLayers(response);
      // var legendDijit = new Legend({
      //   map: map,
      //   layerInfos: legendLayers
      // }, "legend");
      // legendDijit.startup();
    });

  });

});

console.log("help")
