import Component from '@ember/component';
import { setDiff } from '@ember/object/computed';

export default Component.extend({
  availablePermissions: setDiff('permissions', 'model.permissions'),
  actions: {
    addPermission(permission){
      this.get('model.permissions').pushObject(permission);
    },

    removePermission(permission){
      this.get('model.permissions').removeObject(permission);
    },
  }
})
