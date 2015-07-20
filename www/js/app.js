// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngAnimate', 'toastr'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('ToastCtrl', ['toastr', "toastrConfig", "$scope", "$timeout", function (toastr, toastrConfig, $scope, $timeout) {

        function showToast(options) {
            toastr[options.type](options.text, options.title);
        }

        function deferToastCreate() {
            /* cancel any running timer
                we will have a running timer if a key has been pressed within
                the last 750 milliseconds (3/4 second)
             */
            $timeout.cancel($scope.deferredCallback);

            /*
            defer updating till 750 ms have passed
             */
            $scope.deferredCallback = $timeout(function () {
                showToast($scope.toast);
            }, 750);
        }

        $scope.toast = {
            type: "success",
            position: "",
            title: "Toast",
            text: "My text"
        };

        $scope.$watch('toast.type', function (newValue, oldValue) {
            if (newValue != oldValue) {
                toastrConfig.type = newValue;
                showToast($scope.toast);
            }

        });

        $scope.$watch('toast.position', function (newValue, oldValue) {
            if (newValue != oldValue) {
                toastrConfig.positionClass = newValue;
                showToast($scope.toast);
            }
        });


        $scope.$watch('toast.text', function (newValue, oldValue) {
            if (newValue != oldValue) {
                deferToastCreate();
            }
        });

        $scope.$watch('toast.title', function (newValue, oldValue) {
            if (newValue != oldValue) {
                deferToastCreate();
            }
        });

        $scope.$on('$destroy', function () {
            /*
            Remember to clear any timers at the end otherwise we will
            leak memory (probably)
             */
            $timeout.cancel($scope.deferredCallback);
        });

    }]);
