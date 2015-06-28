import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    this.store.find('account');

    return this.store.filter('account', function(plan) {
      return !plan.get('isNew');
    });
  },

  actions:{
    createAccount(){
      this.transitionTo('accounts.new');
    },

    cancel(){
      this.transitionTo('accounts');
    }
  }
});
