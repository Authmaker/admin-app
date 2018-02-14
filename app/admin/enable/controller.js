import Ember from 'ember';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  notifications: service('notification-messages'),
  ajax: service(),

  queryParams: ['showHidden'],
  showHidden: false,

  actions: {
    enableUser: function(user) {
      return get(this, 'ajax').request('/users/send_confirmation', {
        method: 'POST',
        data: {
          id: get(user, 'id'),
        }
      }).then(() => {
        get(this, 'notifications').success(`Confirmation email sent to ${get(user, 'email')}`, {
          autoClear: true
        });
      })
      .then(null, (err) => {
        get(this, 'notifications').error(`Error: ${err.responseText}`);
      });
    },

    hideUser(user) {
      return get(this, 'ajax').request('/users/hide', {
        method: 'POST',
        data: {
          id: get(user, 'id'),
        }
      }).then(() => {
        set(user, 'hidden', true);
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
