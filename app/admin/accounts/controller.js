import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editAccount(account){
      this.transitionToRoute('admin.accounts.edit', account.get('id'));
    },

    createAccount(){
      this.transitionToRoute('admin.accounts.new');
    },

    cancel(){
      this.transitionToRoute('admin.accounts');
    }
  },
});
