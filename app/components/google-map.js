import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  meetupApi: Ember.inject.service(),
  foursquareApi: Ember.inject.service(),


  init(){
    console.log("Got to init");
    this._super(...arguments);
    var results = '';
    var map = this.get('map');
    var meetupApi = this.get('meetupApi')
    var self = this;



    var options = {
      zoom: 13,
      //center: {lat: -34.397, lng: 150.644}
    };
    //map.findAddress(container, options, address)
    //console.log(self.get('meetupApi'));
    // var promise = new Promise(function() {
    //   map.findAddress(container, options, address);
    // }).then(function(values) {
    //   console.log('inside promise');
    //   var meetup = self.get('meetupApi');
    //   meetup.findMeetups(values.lat, values.lng);
    // });
    map.findAddress(options);
  },

  actions: {
    showMap() {
      // var address = this.get('address');
      // this.set('map.city', address);


    },
  }
});
