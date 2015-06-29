import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    cancel(){
      this.transitionToRoute('scopes');
    },

    save(){
      this.get('model').save().then(() => {
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
    },

    delete(){
      this.get('model').deleteRecord();

      if(window.confirm("Are you sure you want to delete this permission?")){
        this.get('model').save().then(() => {
          this.notifications.addNotification({
            type: 'success',
            autoClear: true,
            message: 'Permission deleted successfully'
          });
        }, (err) => {
          this.notifications.addNotification({
            type: 'error',
            message: `Error while deleting permission ${err.responseText || err.message || err}`
          });
        });

        this.transitionToRoute('scopes');
      } else {
        this.get('model').rollbackAttributes();
        this.transitionToRoute('scopes');
      }
    }
  }
});
