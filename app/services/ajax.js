import AjaxService from 'ember-ajax/services/ajax';
import ENV from '@authmaker/admin-app/config/environment';

export default AjaxService.extend({
  namespace: ENV.apiNamespace,
  host: ENV.apiHost,
});
