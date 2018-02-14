import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('permission', params.id);
  },

  actions: {
    willTransition: function() {
      this.modelFor(this.routeName).rollbackAttributes();
    }
  }
});
