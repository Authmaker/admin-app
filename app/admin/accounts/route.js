import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model: function() {
    return this.store.findAll('account').filter((account) => !get(account, 'isNew'));
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
