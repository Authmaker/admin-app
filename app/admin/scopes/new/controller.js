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
      this.store.createRecord('permission', this.get('model')).save().then(() => {
        get(this, 'notifications').success('Permission created successfully', {
          autoClear: true,
        });
      }, (err) => {
        get(this, 'notifications').error(`Error while updating permission ${err.responseText || err.message || err}`);
      });

      this.transitionToRoute('admin.scopes');
    },
    delete() {

    }
  }
});
