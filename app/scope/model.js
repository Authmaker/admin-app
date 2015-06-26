import DS from 'ember-data';

export default DS.Model.extend({
  lowValue: DS.attr('boolean'),
  name: DS.attr('string'),
  newSubscriptions: DS.attr('boolean'),
  scopes: DS.belongsTo('scope'),
  stripePlan: DS.attr('string')
});
