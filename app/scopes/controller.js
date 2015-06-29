import Ember from 'ember';

export default Ember.Controller.extend({

  showDialog: false,

  actions: {
    createScope() {
      this.transitionToRoute('scopes.new');
    },

    editScope(scope) {
      this.transitionToRoute('scopes.edit', scope);
    }
  }
});
