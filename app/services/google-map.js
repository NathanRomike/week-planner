import Ember from 'ember';

export default Ember.Service.extend({

  googleMaps: window.google.maps,
  lat: '',
  lng: '',
  results: '',
  map: '',
  places: [],
  city: '',
  dinner: '',
  drink: '',
  art: '',
  // mapContainer: document.getElementById('#map'),
  // mapContainer: Ember.String.htmlSafe('<div class="map__google"></div>'),

  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  findAddress(options) {
    // console.log('somehow got to the service');
    var self = this;
    setTimeout(function(){




      var container = document.getElementById('map');


      // console.log(document);
      var address = self.get('city');
      var map = new self.googleMaps.Map(container, options);
      self.set('map', map);
      var geocoder = new self.googleMaps.Geocoder();
      var setMarker = self.setMarker(map);
      geocoder.geocode({'address': address}, function(geoResults, status) {
        self.set('results', geoResults[0]);
        if (status === google.maps.GeocoderStatus.OK) {
          map.setCenter(geoResults[0].geometry.location)
          setmarker;
        } else {
          alert('Whoops! Seems like there was a problem. According to Google Maps:' + status);
        }
        self.set('lat', ((self.get('results.geometry.bounds.R.R') + self.get('results.geometry.bounds.R.j')) / 2));
        self.set('lng', ((self.get('results.geometry.bounds.j.R') + self.get('results.geometry.bounds.j.j')) / 2));

        return new Promise(function() {
          return {
            lat: self.get('lat'),
            lng: self.get('lng')
          }
        })
      });
    }, 200);



  },

  finalAddress(options) {
    // console.log('somehow got to the service');
    var self = this;
    setTimeout(function(){
      var container = document.getElementById('map');
      // console.log(document);
      var address = self.get('city');
      var map = new self.googleMaps.Map(container, options);
      self.set('map', map);
      var geocoder = new self.googleMaps.Geocoder();
      var setUserMarkers = self.setUserMarkers(map);
      geocoder.geocode({'address': address}, function(geoResults, status) {
        self.set('results', geoResults[0]);
        if (status === google.maps.GeocoderStatus.OK) {
          map.setCenter(geoResults[0].geometry.location)
          setUserMarkers;
        } else {
          alert('Whoops! Seems like there was a problem. According to Google Maps:' + status);
        }
        self.set('lat', ((self.get('results.geometry.bounds.R.R') + self.get('results.geometry.bounds.R.j')) / 2));
        self.set('lng', ((self.get('results.geometry.bounds.j.R') + self.get('results.geometry.bounds.j.j')) / 2));

        return new Promise(function() {
          return {
            lat: self.get('lat'),
            lng: self.get('lng')
          }
        })
      });
    }, 200);



  },
  setMarker(map) {

    var places = this.get('places');
    for(var i = 0; i < places.length; i++){
      var place = places[i];
      // console.log("This is a place in the setMarker loop")
        var marker = new google.maps.Marker({
          map: map,
          position: {lat: place.location.lat, lng: place.location.lng},
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          title: place.name
        });

        if (place.hoursStatus) {
          marker.info = new google.maps.InfoWindow({
            content: place.name + ' <br>' +
            place.location.address + '<br>'
            + place.hoursStatus + '<br>'
            + place.category
          })
        } else {
          marker.info = new google.maps.InfoWindow({
            content:'<b>' + place.name + '</b> <br>' +
            place.location.address + '<br>'
            + place.category
          })
        }

        google.maps.event.addListener(marker, 'click', function() {
          this.info.open(map, this);
        });
    }
    this.set('places', '');
  },

  setUserMarkers(map) {
    var self = this;
    var setMarker = self.setMarker(map);
    var dinner = this.get('dinner');
    var drink = this.get('drink');
    var art = this.get('art');

    if (dinner.name) {
      var dinnerMarker = new google.maps.Marker({
        map: map,
        position: {lat: dinner.location.lat, lng: dinner.location.lng},
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      });

      dinnerMarker.info = new google.maps.InfoWindow({
        content:'<b>' + dinner.name + '</b> <br>' +
        dinner.location.address + '<br>'
        + dinner.category
      });

      google.maps.event.addListener(dinnerMarker, 'click', function() {
        this.info.open(map, this);
      });
    }

    if (drink.name) {

      var drinkMarker = new google.maps.Marker({
        map: map,
        position: {lat: drink.location.lat, lng: drink.location.lng},
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      });
      drinkMarker.info = new google.maps.InfoWindow({
        content:'<b>' + drink.name + '</b> <br>' +
        drink.location.address + '<br>'
        + drink.category
      });
      google.maps.event.addListener(drinkMarker, 'click', function() {
        this.info.open(map, this);
      });
    }

    if(art.name) {

      var artMarker = new google.maps.Marker({
        map: map,
        position: {lat: art.location.lat, lng: art.location.lng},
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      });

      artMarker.info = new google.maps.InfoWindow({
        content:'<b>' + art.name + '</b> <br>' +
        art.location.address + '<br>'
        + art.category
      });
      google.maps.event.addListener(artMarker, 'click', function() {
        this.info.open(map, this);
      });
    }
  }
});
