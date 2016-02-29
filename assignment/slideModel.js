/* ================================
Week 6 Assignment: Slide Model
================================ */

var myStyle1 = function(feature) {
  switch (feature.properties.DATAEXAMPLE){
  //   case "MON":
  //     return {fillColor: "#BC8112", fillOpacity: 1, color: "#434343", weight: 3};
  //   default:
  //     return {fillColor: "#B3ADA4", fillOpacity: 1, color: "#434343", weight: 3};
  }
};

var myStyle2 = function(feature) {
  switch (feature.properties.DATAEXAMPLE){
  //   case "MON":
  //     return {fillColor: "#BC8112", fillOpacity: 1, color: "#434343", weight: 3};
  //   default:
  //     return {fillColor: "#B3ADA4", fillOpacity: 1, color: "#434343", weight: 3};
  }
};

var myStyle3 = function(feature) {
  switch (feature.properties.DATAEXAMPLE){
  //   case "MON":
  //     return {fillColor: "#BC8112", fillOpacity: 1, color: "#434343", weight: 3};
  //   default:
  //     return {fillColor: "#B3ADA4", fillOpacity: 1, color: "#434343", weight: 3};
  }
};

var myStyle4 = function(feature) {
  switch (feature.properties.DATAEXAMPLE){
  //   case "MON":
  //     return {fillColor: "#BC8112", fillOpacity: 1, color: "#434343", weight: 3};
  //   default:
  //     return {fillColor: "#B3ADA4", fillOpacity: 1, color: "#434343", weight: 3};
  }
};

var myStyle5 = function(feature) {
  switch (feature.properties.DATAEXAMPLE){
  //   case "MON":
  //     return {fillColor: "#BC8112", fillOpacity: 1, color: "#434343", weight: 3};
  //   default:
  //     return {fillColor: "#B3ADA4", fillOpacity: 1, color: "#434343", weight: 3};
  }
};

var obj1 = {title: "Page1Title", subTitle: "Page1sub", text: "Page1text", sqlStatement: "page1sqlStatement", style: myStyle1};
var obj2 = {title: "Page2Title", subTitle: "Page2sub", text: "Page2text", sqlStatement: "page2sqlStatement", style: myStyle2};
var obj3 = {title: "Page3Title", subTitle: "Page3sub", text: "Page3text", sqlStatement: "page3sqlStatement", style: myStyle3};
var obj4 = {title: "Page4Title", subTitle: "Page4sub", text: "Page4text", sqlStatement: "page4sqlStatement", style: myStyle4};
var obj5 = {title: "Page5Title", subTitle: "Page5sub", text: "Page5text", sqlStatement: "page5sqlStatement", style: myStyle5};

var array = [obj1, obj2, obj3, obj4, obj5];
console.log(array);
