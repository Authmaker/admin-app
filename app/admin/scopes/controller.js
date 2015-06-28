import Ember from 'ember';

export default Ember.Controller.extend({

  showDialog: false,

  actions: {
    createPlan() {
      this.set('newScope', this.store.createRecord('scope'));
      this.set('showDialog', true);
    },

    saveScope() {
      this.send('closeDialog');

      this.notifications.addNotification({
        message: 'Creating Permission',
        type: 'info'
      });

      this.get('newScope').save().then(() => {
        this.notifications.clearAll();
        this.notifications.addNotification({
          message: 'Permission saved successfully',
          type: 'success',
          autoClear: true
        });
      }, (err) => {
        
        this.notifications.clearAll();
        this.notifications.addNotification({
          message: `Error saving permission: ${err.responseText || err}`,
          type: 'error'
        });
      });
    },

    closeDialog() {
      this.set('showDialog', false);
    }
  }
});
