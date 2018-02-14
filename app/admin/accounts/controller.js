import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editAccount(account){
      this.transitionTo('accounts.edit', account.get('id'));
    }
  }
});
