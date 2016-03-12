import Ember from 'ember';

export default Ember.Component.extend({
  selectedItems: Ember.inject.service(),
  googleMap: Ember.inject.service(),

  actions: {
    toFinal() {
      var selectedDinner = this.get('selectedItems').dinner;
      var selectedDrink = this.get('selectedItems').drink;
      var selectedArt = this.get('selectedItems').art;
      var map = this.get('googleMap');

      // console.log("In the to Final route");
      // console.log(map);
      // console.log(map.dinner);

      map.set('dinner', selectedDinner);
      map.set('drink', selectedDrink);
      map.set('art', selectedArt);
      this.sendAction('toFinal');

    }
  }
});
