/**
 * Created by Colby on 2015-07-25.
 */
Router.route('/gps');

if (Meteor.isClient) {
    Meteor.startup(function () {
        GoogleMaps.load();
    });

    Template.body.helpers({
        exampleMapOptions: function () {
            // Make sure the maps API has loaded

                var latLng = Geolocation.latLng();
                var lat = latLng.lat;
                var lng = latLng.lng;

                

               return {
                    center: new google.maps.LatLng(lat, lng),
                   zoom: 15
                   

               };
           }



    });


}


