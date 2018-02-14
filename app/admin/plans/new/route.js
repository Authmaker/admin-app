import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      scopes: [],
      newSubscriptions: true
    };
  },

  actions: {
    willTransition: function() {
      this.modelFor(this.routeName).rollbackAttributes();
    }
  }
});
