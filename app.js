var calendarApp = angular.module('calendarDemoApp', []);
calendarApp.controller('MyCtrl', function ($scope){

    $scope.months = [
        {
            'value': 0,
            'label': 'January'
        },
        {
            'value': 1,
            'label': 'Febuary'
        },
        {
            'value': 2,
            'label': 'March'
        },
        {
            'value': 3,
            'label': 'April'
        },
        {
            'value': 4,
            'label': 'May'
        },
        {
            'value': 5,
            'label': 'June'
        },
        {
            'value': 6,
            'label': 'July'
        },
        {
            'value': 7,
            'label': 'August'
        },
        {
            'value': 8,
            'label': 'September'
        },
        {
            'value': 9,
            'label': 'October'
        },
        {
            'value': 10,
            'label': 'November'
        },
        {
            'value': 11,
            'label': 'December'
        }

    ];

    //setting the current date using new Date();
    var myDate = new Date();
    // current year
    $scope.years = [];
    var year = myDate.getFullYear();
    for (var i = 1996; i < year+ 1; i++) {
        $scope.years.push(i);
    }

    var range = CalendarRange.getMonthlyRange(new Date());
    $scope.dates = [];

    $scope.firstDays = angular.forEach(range.days, function(days) {
        $scope.myDate = days.day;

        $scope.dates.push( {
            year: days.year,
            day: days.day
        });



        // console.log($scope.years);
    });

});


// console.log(firstDays);
// console.log(range);
// your controller and directive code go here
calendarApp.directive('theCalendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'calendar.html',
    };
});
