import Ember from 'ember';

export default Ember.Component.extend({
  foursquareApi: Ember.inject.service(),
  map: Ember.inject.service('google-map'),
  selectedItems: Ember.inject.service(),

  actions: {
    getLocation() {
      var location = this.get('location');
      var paramsDrinks = {
        limit: 15,
        section: 'drinks',
        near: location,
      };
      var paramsDinners = {
        limit: 15,
        section: 'food',
        near: location,
      };
      var paramsArts = {
        limit: 15,
        section: 'arts',
        near: location,
      };
      //clear foursquare results for new search
      this.set('foursquareApi.foursquareDrinks', []);
      this.set('foursquareApi.foursquareDinners', []);
      this.set('foursquareApi.foursquareArts', []);
      this.get('selectedItems').location = location;
      this.get('map').city = location;
      var self = this;
      var container;
      var map = self.get('map');
      var options = {
        zoom: 13,
      };
  //    var address = self.get(location);
      this.get('foursquareApi').foursquareRequest('explore', paramsDrinks).then(function(){
        self.get('foursquareApi').foursquareRequest('explore', paramsDinners).then(function() {
          // console.log("made it to promise")
          self.get('foursquareApi').foursquareRequest('explore', paramsArts).then(function() {
            var dinners = self.get('foursquareApi').foursquareDinners;

            var drinks = self.get('foursquareApi').foursquareDrinks;

            var arts = self.get('foursquareApi').foursquareArts;

            var allPlaces = []
            allPlaces.pushObjects(dinners);
            allPlaces.pushObjects(drinks);
            allPlaces.pushObjects(arts);
            // console.log('This is allPlaces:')
            // console.log(allPlaces);
            self.get('map').places.pushObjects(allPlaces);
            // console.log(self.get('map').places)
            self.sendAction('getLocation');

          });
        });
      });
    //send request to googleMaps service
    },
  }
});
