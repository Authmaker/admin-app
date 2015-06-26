import Ember from 'ember';

export default Ember.Component.extend({

  checkImage: function(){
    if(!this.get('gravatarHash')){
      return;
    }
    
    Ember.$.ajax({
      url: `https://en.gravatar.com/${this.get('gravatarHash')}.json`,
      dataType: 'jsonp'
    }).then(() => {
      this.set('hasImage', true);
    });
  }.on('init'),

  firstLetter: Ember.computed('title', function(){
    return this.get('title').capitalize().slice(0,1);
  })
});
