import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  companyName: DS.attr('string'),
  contactNumber: DS.attr('string'),
  websiteUrl: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  activated: DS.attr('Boolean'),
  sentEmails: DS.attr(),

  gravatarHash: DS.attr('string'),

  confirmationSent: Ember.computed('sentEmails.@each', function(){
    return this.get('sentEmails').any(function(email){
      return email.reference === 'confirmation';
    });
  }),

  hasImage: Ember.computed('gravatarHash', function(){

    var promise = new Ember.RSVP.Promise((resolve) => {
      if(!this.get('gravatarHash')){
        return resolve(false);
      }

      return Ember.$.ajax({
        url: `https://en.gravatar.com/${this.get('gravatarHash')}.json`,
        dataType: 'jsonp'
      }).then(() => {
        return resolve(true);
      });
    });

    return DS.PromiseObject.create({
      promise: promise
    });

  }),

  title: Ember.computed('username', 'displayName', function(){
    return this.get('displayName') || this.get('username');
  })
});
