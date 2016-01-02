var calendarApp = angular.module('calendarDemoApp', []);
calendarApp.controller('MyCtrl', function ($scope){

    $scope.months = {
        0: 'January',
        1: 'Febuary',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    var range = CalendarRange.getMonthlyRange(new Date());

    $scope.firstDays = angular.forEach(range.days, function(days) {
        $scope.today = days.day;
        console.log($scope.today);
        $scope.dates = {
            year: days.year,
            day: days.day
        };

        var years = [];
        var then = year - 100;
        for(var i=then;i<=year;i++) {
            years.push(i);
        }
        $scope.years = years;
        // console.log($scope.years);
    });
});


// console.log(firstDays);
// console.log(range);
// your controller and directive code go here
calendarApp.directive('theCalendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'calendar.html'
    };
});
