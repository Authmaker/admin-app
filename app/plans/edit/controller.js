import Ember from 'ember';

export default Ember.Controller.extend({

  allScopes: Ember.computed(function(){
    return this.store.findAll('scope');
  }),

  availablePermissions: Ember.computed.setDiff('allScopes', 'model.scopes'),

  actions: {
    cancel(){
      this.transitionToRoute('plans');
    },

    addScope(scope){
      this.get('model.scopes').pushObject(scope);
    },

    removeScope(scope){
      this.get('model.scopes').removeObject(scope);
    },

    savePlan(){

      this.get('model').save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Plan updated successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while updating plan ${err.responseText || err.message || err}`
        });
      });

      this.transitionToRoute('plans');
    },

    delete(){
      this.get('model').deleteRecord();

      if(window.confirm("Are you sure you want to delete this plan?")){
        this.get('model').save().then(() => {
          this.notifications.addNotification({
            type: 'success',
            autoClear: true,
            message: 'Plan deleted successfully'
          });
        }, (err) => {
          this.notifications.addNotification({
            type: 'error',
            message: `Error while deleting plan ${err.responseText || err.message || err}`
          });
        });

        this.transitionToRoute('plans');
      } else {
        this.get('model').rollbackAttributes();
        this.transitionToRoute('plans');
      }
    }
  }
});
