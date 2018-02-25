import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    addUser(user){
      this.get('model.users').pushObject(user);
    },

    removeUser(user){
      this.get('model.users').removeObject(user);
    },

    searchUsers(term) {
      console.log('here', term);
      return get(this, 'store').query('user', {enabled: true, email: term});

      let XHR_TIMEOUT = Math.floor(Math.random() * 1000) + 100;

      return new RSVP.Promise((resolve) => {
        run.cancel(this.searchTimer);

        this.searchTimer = run.later(this, () => {
          let nameRegExp = new RegExp(escapeRegExp(`${term}`), 'i', 'g');
          let countries = this.get('items');
          let results = countries.filter((c) => nameRegExp.exec(c.name)) || [];
          resolve(results);
        }, XHR_TIMEOUT);
      });
    }
  },
});
