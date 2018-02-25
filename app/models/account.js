import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  plan: DS.belongsTo('plan', {async: true}),
  expiry: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),
});
