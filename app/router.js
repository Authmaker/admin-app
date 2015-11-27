import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('admin', function() {
    this.route('enable');
    this.route('view');
    this.resource('plans', function() {
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });
    this.resource('scopes', function(){
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });
    this.resource('accounts', function() {
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });
  });
});

export default Router;
