import AccountCreateController from 'authmaker-admin-app/accounts/new/controller';
import moment from 'moment';

export default AccountCreateController.extend({

  actions: {
    setEditExpiry(value){
      this.set('editExpiry', value);
    },

    save(){

      if(!this.get('model.planExpiryDate') || this.get('editExpiry')){
        this.set('model.planExpiryDate', moment().add(this.get('selectedNumber'), this.get('selectedTimePeriod')).toDate());
        this.set('editExpiry', false);
      }

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
    },

    delete(){
      this.get('model').deleteRecord();

      if(window.confirm("Are you sure you want to delete this account?")){
        this.get('model').save().then(() => {
          this.notifications.addNotification({
            type: 'success',
            autoClear: true,
            message: 'Account deleted successfully'
          });
        }, (err) => {
          this.notifications.addNotification({
            type: 'error',
            message: `Error while deleting account ${err.responseText || err.message || err}`
          });
        });

        this.transitionToRoute('accounts');
      } else {
        this.get('model').rollbackAttributes();
        this.transitionToRoute('accounts');
      }
    }
  }
});
