import Ember from 'ember';

export default Ember.Controller.extend({
  classNameBindings: [':ember-app'],

  actions: {
    transitionTo(route){
      this.transitionToRoute(route);
    }
  }
});
