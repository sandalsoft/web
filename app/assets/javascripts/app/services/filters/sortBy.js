angular.module('app.frontend')
  .filter('sortBy', function ($filter) {
    return function(items, sortBy) {
      items = items || [];
      return items.sort(function(a, b){
        if(a.pinned) { return -1; }
        if(b.pinned) { return 1; }

        var aValue = a[sortBy] || "";
        var bValue = b[sortBy] || "";

        let vector = 1;
        if(sortBy == "title") {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();

          if(aValue.length == 0 && bValue.length == 0) {
            return 0;
          } else if(aValue.length == 0 && bValue.length != 0) {
            return 1;
          } else if(aValue.length != 0 && bValue.length == 0) {
            return -1;
          } else  {
            vector = -1;
          }
        }
        if(aValue > bValue) { return -1 * vector;}
        else if(aValue < bValue) { return 1 * vector;}
        return 0;
      })
    };
  });
