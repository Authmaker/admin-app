import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  init() {
    get(this, 'account.users').then((users) => {
      $.ajax({
        url: `https://en.gravatar.com/${get(users, 'firstObject.gravatarHash')}.json`,
        dataType: 'jsonp'
      }).then(() => {
        set(this, 'image', get(users, 'firstObject.gravatarHash'));
      });
    })

    this._super(...arguments);
  },

  firstLetter: computed('account.name', function(){
    if(!this.get('account.name')){
      return;
    }
    return this.get('account.name').capitalize().slice(0,1);
  }),
});
