import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),
  ajax: Ember.inject.service(),
  foursquareApi: Ember.inject.service(),
  yelpResult: '',
  isShowes: false,

  actions: {
    sendRequestToService() {
      var params = {
        limit: 10
      };
      if (this.get('location')) {
        params.location = this.get('location');
      }
      this.get('yelpApi').yelpRequest(params);
    },

    sendFoursquareRequest() {
      var params = {
        limit: 10,
        near: this.get('location')
      };
      this.get('foursquareApi').foursquareRequest('explore', params);
    }
  }
});
