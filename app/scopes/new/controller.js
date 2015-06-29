import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    cancel(){
      this.transitionToRoute('scopes');
    },

    save(){
      this.store.createRecord('scope', this.get('model')).save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Permission updated successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while updating permission ${err.responseText || err.message || err}`
        });
      });

      this.transitionToRoute('scopes');
    }
  }
});
