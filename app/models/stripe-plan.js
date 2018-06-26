import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  nickname: DS.attr(),
  amount: DS.attr(),
  currency: DS.attr(),
  interval: DS.attr(),
  intervalCount: DS.attr('number'),
  trialPeriodDays: DS.attr('number'),

  cost: computed('amount', function() {
    return this.get('amount') / 100;
  })
});
