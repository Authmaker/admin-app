import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPlan(plan) {
      this.transitionToRoute('admin.plans.edit', plan);
    },

    createPlan() {
      this.transitionToRoute('admin.plans.new');
    },
  }
});
