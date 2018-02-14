import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  notifications: service('notification-messages'),
  actions: {
    cancel(){
      this.transitionToRoute('admin.scopes');
    },

    save(){
      this.get('model').save().then(() => {
        get(this, 'notifications').success('Permission updated successfully', {
          autoClear: true,
        });
      }, (err) => {
        get(this, 'notifications').error(`Error while updating permission ${err.responseText || err.message || err}`);
      });

      this.transitionToRoute('admin.scopes');
    },

    delete(){
      if(window.confirm("Are you sure you want to delete this permission?")){
        this.get('model').destroyRecord().then(() => {
          get(this, 'notifications').success('Permission deleted successfully', {
            autoClear: true,
          });
        }, (err) => {
          get(this, 'notifications').error(`Error while deleting permission: ${err.responseText || err.message || err}`);
        });

        this.transitionToRoute('admin.scopes');
      } else {
        this.get('model').rollbackAttributes();
        this.transitionToRoute('admin.scopes');
      }
    }
  }
});
