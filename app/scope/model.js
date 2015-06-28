import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  scope: DS.attr('string'),
  paidFor: DS.attr('boolean'),
  description: DS.attr('string')
});
