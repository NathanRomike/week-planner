import Ember from 'ember';


export default Ember.Route.extend({


  actions: {
    toFinal() {
      this.transitionTo('final');
    }
  }
});
