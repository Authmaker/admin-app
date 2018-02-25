import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  plansController: controller('admin.plans'),
  notifications: service('notification-messages'),
  actions: {
    cancel(){
      this.transitionToRoute('admin.plans');
    },

    savePlan() {
      this.store.createRecord('plan', this.get('model')).save().then(() => {
        get(this, 'notifications').success('Plan created successfully', {
          autoClear: true,
        });

        this.transitionToRoute('admin.plans');
      }, (err) => {
        get(this, 'notifications').error(`Error while creating plan ${err.responseText || err.message || err}`);
      });
    }
  }
});
