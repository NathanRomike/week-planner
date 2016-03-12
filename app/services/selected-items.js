import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],
  dinner: '',
  drink: '',
  art: '',
  location: '',

  add(business) {
    this.get('businesses').addObject(business);
  },
  addDrink(business) {
    this.set('drink', business);
    // console.log('added mat ego');
    // console.log(this.get('drink'));
  },
  addDinner(business) {
    this.set('dinner', business);
  },
  addArt(business) {
    this.set('art', business);
  },
});
