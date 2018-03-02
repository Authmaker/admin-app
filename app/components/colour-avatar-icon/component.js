import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  firstLetter: computed('title', function(){
    if(!this.get('title')){
      return;
    }
    return this.get('title').capitalize().slice(0,1);
  }),
});
