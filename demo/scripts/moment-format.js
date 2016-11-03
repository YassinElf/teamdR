'use strict';

angular.module('demoApp')
    .filter('momentFormat', function() {

        return function (value, format) {
            var date = new Date(value);
            return moment(date).isValid() ? moment(date).format(format) : value;
        };

    });