import Controller from '@ember/controller';

export default Controller.extend({
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
