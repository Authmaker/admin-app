import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  activated: DS.attr('Boolean'),
  sentEmails: DS.attr(),

  gravatarHash: DS.attr('string'),

  confirmationSent: Ember.computed('sentEmails.@each', function(){
    return this.get('sentEmails').any(function(email){
      return email.reference === 'confirmation';
    });
  })
});
