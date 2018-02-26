import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  accountsController: controller('admin.accounts'),
  notifications: service('notification-messages'),

  actions: {
    cancel() {
      this.transitionToRoute('admin.accounts');
    },
    save(){
      get(this, 'model').save().then(() => {
        get(this, 'notifications').success('Account updated successfully', {
          autoClear: true,
        });

        this.transitionToRoute('admin.accounts');
      }, (err) => {
        get(this, 'notifications').error(`Error while updating account ${err.responseText || err.message || err}`);
      });
    },
    delete(){
      if(window.confirm("Are you sure you want to delete this account?")){
        get(this, 'model').destroyRecord().then(() => {
          get(this, 'notifications').success('Account deleted successfully', {
            autoClear: true,
          });

          this.transitionToRoute('admin.accounts');
        }, (err) => {
          get(this, 'notifications').error(`Error while deleting account ${err.responseText || err.message || err}`);
        });
      }
    },
  }
});
