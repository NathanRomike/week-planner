import Ember from 'ember';

export default Ember.Component.extend({
  selectedItems: Ember.inject.service(),
  googleMap: Ember.inject.service(),
});
