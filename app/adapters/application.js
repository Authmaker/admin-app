import DS from 'ember-data';
import ENV from '@authmaker/admin-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.apiNamespace,
  host: ENV.apiHost,
});
