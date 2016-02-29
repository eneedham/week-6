/* ================================
Week 6 Assignment: Midterm Function Signatures
================================ */
var eachFeature = function(feature, layer) {
  layer.on('click', function (e) {
    var bounds = this.getBounds();
    map.fitBounds(bounds);
  });
};

//Calling my CartoDB dataset
var getDataFunction = function (tableName, sqlStatement){
var sql = new cartodb.SQL({ user: 'eneedham', format: 'geojson' });
sql.execute("SELECT * FROM " + tableName + " WHERE " + sqlStatement).done(function(geojson) {
   L.geoJson(geojson, {
       onEachFeature: eachFeature,
       style: myStyle}).addTo(map).addData(geojson);
});
};

//Click function
$("#button").click(function(){
  legend.removeFrom(map);
  geojson.clearLayer();
});

$("#buttonDefault").click(function(){

});

var defaultViewFunc = function(){
    // $('#intro').show();
    // $('#results').hide();
    map.setView([40.000, -75.1090], 11);
};
