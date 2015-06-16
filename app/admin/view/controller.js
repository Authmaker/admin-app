import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    downloadCSV(content) {
      var keysToExport = ['email'];
      var csvData = content.map(function(row) {
        var rowString = "";
        var rows = 0;

        keysToExport.forEach(function(key) {

          var value = row.get(key);

          if (value) {
            value = value.toString().replace(/[\n,]/g, '');
          }

          rowString += `${rows ? ',' : ''}${value}`;
          rows++;
        });

        return rowString;
      });

      //add the header row
      csvData.unshift(keysToExport.map(function(key) {
        return key;

        //TODO enable ember i18n
        var translation = Ember.I18n.t(`csv.${key}`);
        return translation.indexOf('Missing translation') === 0 ? key : translation;
      }));

      var csv = csvData.join('\n');



      var tempLink = document.createElement('a');
      tempLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
      tempLink.setAttribute('download', 'emails.csv');

      if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        tempLink.dispatchEvent(event);
      } else {
        tempLink.click();
      }
    }
  }
});
