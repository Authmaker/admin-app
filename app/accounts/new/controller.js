import Ember from 'ember';

export default Ember.Controller.extend({

  allPlans: Ember.computed(function(){
    return this.store.findAll('plan');
  }),

  availablePlans: Ember.computed('model.plan', 'allPlans.@each', function(){
    return this.get('allPlans').without(this.get('model.plan'));
  }),

  allUsers: Ember.computed(function(){
    return this.store.findAll('user');
  }),

  availableUsers: Ember.computed.setDiff('allUsers', 'model.users'),

  actions: {
    addPlan(plan){
      this.set('model.plan', plan);
    },

    removePlan(){
      this.set('model.plan', null);
    },

    addUser(user){
      this.get('model.users').addObject(user);
    },

    removeUser(user){
      this.get('model.users').removeObject(user);
    },

    save(){

      this.store.createRecord('account', this.get('model')).save().then(() => {
        this.notifications.addNotification({
          type: 'success',
          autoClear: true,
          message: 'Account created successfully'
        });
      }, (err) => {
        this.notifications.addNotification({
          type: 'error',
          message: `Error while creating account ${err.responseText || err.message || err}`
        });
      });
      this.transitionToRoute('accounts');
    }
  }
});
