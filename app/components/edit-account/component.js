import Component from '@ember/component';

export default Component.extend({
  actions: {
    addUser(user){
      this.get('model.users').pushObject(user);
    },

    removeUser(user){
      this.get('model.users').removeObject(user);
    },
  },
});
