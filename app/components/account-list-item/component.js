import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['hasImage:desc',  'username:asc'],
  sortedUsers: Ember.computed.sort('account.users', 'sortProperties'),

  title: Ember.computed('account.name', 'account.users.@each.username', function(){
    if(this.get('account.name')){
      return this.get('account.name');
    }

    return this.get('sortedUsers.firstObject.username');
  })
});
