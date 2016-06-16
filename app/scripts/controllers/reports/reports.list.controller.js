'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('ReportListCtrl', function($scope, $state, app_manager) {

  	var vm = this;
    console.log('here reports')
    //line chart
    var line_options = {
      "chart": {
        "type": "line"
      },
      "xAxis": {
        "type": "category"
      },
      "series": [
        {
          "index": 0,
          "name": "Series 1",
          "data": [
            ["A",1],
            ["B",2],
            ["c",5]
          ]
        },
        {
          "index": 1,
          "name": "Series 2",
          "data": [
            ["A",2],
            ["B",5],
            ["c",3]
          ]
        }
      ]
    };
    $('#linechart').highcharts(line_options);

    //pie chart
    var pie_options = {
      "chart": {
        "type": "pie"
      },
      "plotOptions": {
        "pie": {
          "allowPointSelect": true,
          "cursor": true,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      },
      "xAxis": {
        "type": "category"
      },
      "series": [
        {
          "index": 0,
          "name": "Series 1",
          "data": [
            [
              "A",
              1
            ],
            [
              "B",
              2
            ],
            [
              "c",
              5
            ]
          ]
        },
        {
          "index": 1,
          "name": "Series 2",
          "data": [
            [
              "A",
              2
            ],
            [
              "B",
              5
            ],
            [
              "c",
              3
            ]
          ]
        }
      ]
    };
    $('#piechart').highcharts(pie_options);
  });
  