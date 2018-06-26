import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model: function() {
    return hash({
      plans: this.store.findAll('plan'),
      stripePlans: this.store.findAll('stripe-plan'),
      permissions: this.store.findAll('permission'),
    });
  }
});
