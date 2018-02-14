import Ember from 'ember';

export default Ember.Controller.extend({
  showDialog: false,

  actions: {
    createScope() {
      this.transitionToRoute('admin.scopes.new');
    },

    editScope(scope) {
      this.transitionToRoute('admin.scopes.edit', scope);
    }
  }
});
