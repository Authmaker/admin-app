import Ember from 'ember';

export default Ember.Controller.extend({

  showDialog: false,

  actions: {
    createPlan() {
      this.set('newPlan', this.store.createRecord('plan', {newSubscriptions: true}));
      this.set('showDialog', true);
    },

    savePlan() {
      this.send('closeDialog');

      this.notifications.addNotification({
        message: 'Creating Plan',
        type: 'info'
      });

      this.get('newPlan').save().then(() => {
        this.notifications.clearAll();
        this.notifications.addNotification({
          message: 'Plan saved successfully',
          type: 'success',
          autoClear: true
        });
      }, (err) => {

        console.log(err);

        this.notifications.clearAll();
        this.notifications.addNotification({
          message: `Error saving plan: ${err.responseText || err}`,
          type: 'error'
        });
      });
    },

    closeDialog() {
      this.set('showDialog', false);
    }
  }
});
