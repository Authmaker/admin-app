import PlanEditController from 'authmaker-admin-app/plans/edit/controller';

export default PlanEditController.extend({

  actions: {
    savePlan(){

      this.store.createRecord('plan', this.get('model')).save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Plan created successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while creating plan ${err.responseText || err.message || err}`
        });
      });

      this.transitionToRoute('plans');
    }
  }
});
