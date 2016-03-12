import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  userSelection: Ember.inject.service('selected-items'),

  init(){
    this._super(...arguments);
    // var results = '';
    var map = this.get('map');
    // var dinnerGeo = this.get('userSelection.dinner.location');
    // var drinkGeo = this.get('userSelection.drink.location');
    // var artGeo = this.get('userSelection.art.location');
    // var location = this.get('userSelection.location');
    // //console.log(this.get(artGeo));
    // var self = this;
    // var markerParams = {
    //   map: this.get('map'),
    //   position: {lat: location.lat, lng: location.lng},
    //   places: dinner + drink + art,
    //   log: console.log(this.get('places'))
    // }
    var options = {
      zoom: 13,
    };
    map.finalAddress(options);

  },

  actions: {

  }
});
