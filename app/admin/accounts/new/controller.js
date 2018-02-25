import moment from 'moment';
import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  accountsController: controller('admin.accounts'),
  notifications: service('notification-messages'),

  // allUsers: computed(function(){
  //   return this.store.findAll('user');
  // }),
  //
  // availableUsers: computed.setDiff('allUsers', 'model.users'),

  actions: {
    cancel() {
      this.transitionToRoute('admin.accounts');
    },
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
        get(this, 'notifications').success('Account created successfully', {
          autoClear: true,
        });

        this.transitionToRoute('admin.accounts');
      }, (err) => {
        get(this, 'notifications').error(`Error while creating account ${err.responseText || err.message || err}`);
      });
    }
  }
});
