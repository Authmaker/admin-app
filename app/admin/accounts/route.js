import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model: function() {
    return hash({
      plans: this.store.findAll('plan'),
      accounts: this.store.findAll('account'),
      users: this.store.query('user', {enabled: true}),
    });
  },
});
