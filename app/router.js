import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('enable');
    this.route('view');

    this.route('plans', function() {
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });

    this.route('scopes', function(){
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });

    this.route('accounts', function() {
      this.route('new');
      this.route('edit', {
        path: 'edit/:id'
      });
    });
  });


});

export default Router;
