import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  plansController: controller('admin.plans'),
  notifications: service('notification-messages'),

  actions: {
    cancel(){
      this.get('model').rollbackAttributes();
      this.transitionToRoute('admin.plans');
    },

    savePlan(){
      this.get('model').save().then(() => {
        get(this, 'notifications').success('Plan updated successfully', {
          autoClear: true,
        });

        this.transitionToRoute('admin.plans');
      }, (err) => {
        get(this, 'notifications').error(`Error while updating plan ${err.responseText || err.message || err}`);
      });
    },

    delete(){
      if(window.confirm("Are you sure you want to delete this plan?")){
        get(this, 'model').destroyRecord().then(() => {
          get(this, 'notifications').success('Plan deleted successfully', {
            autoClear: true,
          });

          this.transitionToRoute('admin.plans');
        }, (err) => {
          get(this, 'notifications').error(`Error while deleting plan ${err.responseText || err.message || err}`);
        });
      }
    }
  }
});
