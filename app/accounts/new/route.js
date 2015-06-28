import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      users: []
    };
  },

  actions: {
    willTransition: function() {
      this.modelFor(this.routeName).rollbackAttributes();
    }
  }
});
