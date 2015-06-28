import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.find('scope');

    return this.store.filter('scope', function(plan) {
      return !plan.get('isNew');
    });
  }
});
