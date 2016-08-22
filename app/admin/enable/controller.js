import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['showHidden'],
  showHidden: false,

  actions: {
    enableUser: function(user) {
      return Ember.$.post('/api/admin/users/send_confirmation', {
        id: user.get('id')
      }).then(() => {
        this.notifications.addNotification({
          message: "Confirmation email sent to " + user.get('email'),
          type: 'success',
          autoClear: true
        });
      })
      .then(null, (err) => {
        this.notifications.addNotification({
          message: 'Error: ' + err.responseText,
          type: 'error'
        });
      });
    },

    hideUser(user) {
      return Ember.$.post('/api/admin/users/hide', {
        id: user.get('id')
      }).then(() => {
        user.set('hidden', true);
      })
      .then(null, (err) => {
        this.notifications.addNotification({
          message: 'Error: ' + err.responseText,
          type: 'error'
        });
      });
    },
  }
});
