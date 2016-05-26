var mapShown = false;
        
function showMap() {
    if(!mapShown) {
        var map = $("<div class='map'><iframe id='mapFrame' onload='ifFrameLoaded()' height='100%' width='100%' frameBorder='0' src='https://a.tiles.mapbox.com/v4/transparenciaunicamp.057nf8mf/attribution,zoompan,zoomwheel.html?access_token=pk.eyJ1IjoidHJhbnNwYXJlbmNpYXVuaWNhbXAiLCJhIjoiY2lvYWYzdzhsMDNpN3cxa3F0M2czaGtraiJ9.Snu_l3HM0COOW0V39I0LvA'></iframe></div>")
        map.appendTo('#myMap')
        mapShown = true
    }
}

function ifFrameLoaded() {
    $('#mapFrame').css('height', $(window).height()+'px');
}
