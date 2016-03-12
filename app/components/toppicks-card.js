import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),
  foursquareApi: Ember.inject.service(),
});
