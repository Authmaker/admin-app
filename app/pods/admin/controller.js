import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    enableUser: function(user) {
      return Ember.$.post('/api/admin/users/send_confirmation', {
        username: user.get('username'),
        email: user.get('email')
      });
    }
  }
});
