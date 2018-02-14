import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
   showHidden: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.query('user', {enabled: false, hidden: params.showHidden});
  }
});
