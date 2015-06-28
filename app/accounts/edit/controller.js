import AccountCreateController from 'authmaker-admin-app/accounts/new/controller';

export default AccountCreateController.extend({
  actions: {
    save(){
      this.get('model').save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Account updated successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while updating account ${err.responseText || err.message || err}`
        });
      });
      this.transitionToRoute('accounts');
    }
  }
});
