import Component from '@ember/component';
// import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { setDiff } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  availableUsers: setDiff('users', 'model.users'),
  actions: {
    addUser(user){
      this.get('model.users').pushObject(user);
    },

    removeUser(user){
      this.get('model.users').removeObject(user);
    },

    // TODO: re-enable search users
    // searchUsers(term) {
    //   return get(this, 'store').query('user', {enabled: true, email: term});
    // }
  },
});
