var module = require('ui/modules').get('kvp-pretty-filters');
module.controller('KvpRangeController', function($scope, Private) {
  var queryFilter = Private(require('ui/filter_bar/query_filter'));
  var buildRangeFilter = require('ui/filter_manager/lib/range');
  var key = $scope.vis.aggs.bySchemaName['range'][0].params.field.name;
  var index = $scope.vis.indexPattern.title;
  
  $scope.applyFilter = function() {
    if(!$scope.min) {
      $scope.msg = "Please specify min value";
      return;
    }
    if(!$scope.max) {
      $scope.msg = "Please specify max value";
      return;
    }
    $scope.msg = "";

    if($scope.min > $scope.max) {
      var realMax = $scope.min;
      $scope.min = $scope.max;
      $scope.max = realMax;
    }

    removeExistingFilters(key);

    var rangeFilter = buildRangeFilter(
      $scope.vis.aggs.bySchemaName['range'][0].params.field, 
      {
        gte: $scope.min,
        lt: $scope.max
      }, 
      index);
    rangeFilter.meta = {
      disabled: false, 
      negate: false, 
      index: index, 
      key: key
     }
    queryFilter.addFilters([rangeFilter]);
  }

  //Filter can be created/updated/deleted from other visualizations
  //Monitor all responses and update control inputs accordingly
  $scope.$watch('esResponse', function(resp) {
    var found = false;
    _.flatten([queryFilter.getAppFilters()]).forEach(function(it) {
      if(it.meta.key === key) {
        found = true;
        var range = it.meta.value.split(" to ");
        $scope.min = parseFloat(range[0]);
        $scope.max = parseFloat(range[1]);
      }
    });

    if(!found) {
      $scope.min = null;
      $scope.max = null;
    }
    return;
  });

  function removeExistingFilters(key) {
    var existingFilters = _.flatten([queryFilter.getAppFilters()]);
    console.debug("existing filters", existingFilters);
    existingFilters.forEach(function(existingFilter) {
      if(existingFilter.meta.key === key) {
        queryFilter.removeFilter(existingFilter);
      }
    });
  }
});