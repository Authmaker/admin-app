import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    enableUser: function(user) {
      return Ember.$.post('/api/admin/users/send_confirmation', {
        id: user.get('id')
      }).then(function() {
        this.notifications.addNotification({
          message: "Confirmation email sent to " + user.get('email'),
          type: 'success',
          autoClear: true
        });
      }.bind(this))
      .then(null, function(err){
        console.log(err);
        this.notifications.addNotification({
          message: 'Error: ' + err.responseText,
          type: 'error'
        });
      }.bind(this));
    }
  }
});
