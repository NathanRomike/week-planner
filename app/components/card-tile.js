import Ember from 'ember';

export default Ember.Component.extend({
  selectedItems: Ember.inject.service(),
  classNameBindings: ['venue'],
  venue: true,

  actions: {
    save(business) {
      if (business.type === 'drink') {
        this.get('selectedItems').addDrink(business);
      } else if (business.type === 'dinner') {
        this.get('selectedItems').addDinner(business);
      } else {
        this.get('selectedItems').addArt(business);
      }
    }
  }
});
