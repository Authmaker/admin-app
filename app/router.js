import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


Router.map(function() {
  this.resource('admin', function(){
    this.route('enable');
    this.route('view');
  });
});

export default Router;
