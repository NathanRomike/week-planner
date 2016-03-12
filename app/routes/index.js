import Ember from 'ember';


export default Ember.Route.extend({
  yelpApi: Ember.inject.service(),
  foursquareApi: Ember.inject.service(),
  googleMap: Ember.inject.service(),
  meetupApi: Ember.inject.service(),


  actions: {
    getLocation() {
      this.transitionTo('main');
    }
  }

});
