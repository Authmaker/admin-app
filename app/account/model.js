import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  plan: DS.belongsTo('plan', {async: true}),
  planExpiryDate: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),

  //for display as array
  planArray: Ember.computed('plan', function(){
    return Ember.A([this.get('plan')]);
  })
});
