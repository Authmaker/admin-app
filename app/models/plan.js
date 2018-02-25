import DS from 'ember-data';

export default DS.Model.extend({
  lowValue: DS.attr('boolean'),
  name: DS.attr('string'),
  newSubscriptions: DS.attr('boolean'),
  permissions: DS.hasMany('permission'),
  stripePlan: DS.attr('string')
});
