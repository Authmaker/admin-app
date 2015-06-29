import Ember from 'ember';

export default Ember.Controller.extend({

  showDialog: false,

  actions: {
    editPlan(plan) {
      this.transitionToRoute('plans.edit', plan);
    },

    createPlan() {
      this.transitionToRoute('plans.new');
    },

    savePlan() {

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

        this.notifications.clearAll();
        this.notifications.addNotification({
          message: `Error saving plan: ${err.responseText || err}`,
          type: 'error'
        });
      });
    }
  }
});
