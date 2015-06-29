import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.find('plan');

    return this.store.filter('plan', function(plan) {
      return !plan.get('isNew');
    });
  }
});
