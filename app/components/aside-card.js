import Ember from 'ember';

export default Ember.Component.extend({
  selectedItems: Ember.inject.service(),

  actions: {
    clickEv() {
      // console.log('imgere')
      var category = this.get('business.type');
      if (category === drink) {
        this.set('selectedItems.drink', '');
      } else if (category === dinner) {
        this.set('selectedItems.dinner', '');
      } else {
        this.set('selectedItems.art', '');
      }
    }
  }
});
