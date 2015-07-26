///**
// * Created by danielchoi on 2015-07-26.
// */
//
//var map;
//
//var totalDist = 0;
//
//// Save positions' history
//var path = [];
//
//function initialize() {
//    var mapOptions = {
//        zoom: 18
//    };
//    map = new google.maps.Map(document.getElementById('map-canvas'),
//        mapOptions);
////navigation
//
//    if(navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function(position) {
//            var pos = new google.maps.LatLng(position.coords.latitude,
//                position.coords.longitude);
//
//            // Create the polyline's points (TO DELETE: this for-loop)
//            for(var i = 0; i < 5; i++) {
//                // Create a random point using the user current position and a random generated number.
//                // The number will be once positive and once negative using based on the parity of i
//                // and to reduce the range the number is divided by 10
//                path.push(
//                    new google.maps.LatLng(
//                        position.coords.latitude + (Math.random() / 10 * ((i % 2) ? 1 : -1)),
//                        position.coords.longitude + (Math.random() / 10 * ((i % 2) ? 1 : -1))
//                    )
//                );
//            }
//
//            // Push found location to path
//            path.push(pos);
//
//            // Store length of path so far in kilometers
//            var tempDist = google.maps.geometry.spherical.computeLength(path)/1000;
//
//            // Display tag; round path length to 2 decimals
//            totalDist = 'Distance travelled: ' +
//                tempDist.toFixed(2) + ' km';
//
//            var infowindow = new google.maps.InfoWindow({
//                map: map,
//                position: pos,
//                content: totalDist.toString()
//            });
//
//            map.setCenter(pos);
//
//            // Create polyline object
//            var polyline = new google.maps.Polyline({
//                map: map,
//                path: path,
//                strokeColor: '#66CCFF',
//                strokeOpacity: 0.5,
//                strokeWeight: 5
//            })
//        }, function() {
//            handleNoGeolocation(true);
//        });
//    } else {
//
//        handleNoGeolocation(false);
//    }
//}
//
//function handleNoGeolocation(errorFlag) {
//    if (errorFlag) {
//        var content = 'Error: The Geolocation service failed.';
//    } else {
//        var content = 'Error: Your browser doesn\'t support geolocation.';
//    }
//
//    var options = {
//        map: map,
//        position: new google.maps.LatLng(60, 105),
//        content: content
//    };
//
//    var infowindow = new google.maps.InfoWindow(options);
//    map.setCenter(options.position);
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);