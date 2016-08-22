import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
   showHidden: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('user', {enabled: false, hidden: params.showHidden});
  }
});
