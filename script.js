(function(angular) {
  //'use strict';
angular.module('https', [])
  .controller('FetchController', function($scope, $http) 
  {
      $scope.method = 'GET';
     // $scope.method = 'PUT';
      $scope.url = 'url';

      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url}).
          then(function(response) {
            $scope.status = response.status;
            $scope.statustext = response.statusText;
            $scope.data = response.data;
          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });
      };
//alter POST

        $scope.SendHttpPostData = function () {

            var data = $.param({
                fdata: $scope.fdata
               
            });
        var params = {
        param1: $scope.postParam1,
        param2: $scope.postParam2
      };

            var config = {
              params: params,
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post($scope.url, data, config)
            .success(function (data, status, headers, config) {
                $scope.ServerResponse = data;
                $scope.status=status;
                 $scope.headers=headers;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };

//Alter PUT

$scope.SendHttpPUTData = function () {

            var data = $.param({
                fdata: $scope.fdata
               
            });
        var params = {
        param1: $scope.postParam1,
        param2: $scope.postParam2
      };

            var config = {
              params: params,
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.put($scope.url, data, config)
            .success(function (data, status, headers, config) {
                $scope.ServerResponse = data;
                $scope.status=status;
                 $scope.headers=headers;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };

//Alter  DELETE

$scope.SendHttpDELETEData = function () {
      var params = {
        param1: $scope.deleteParam1,
        param2: $scope.deleteParam2
      };

      var config = {
        params: params
      };

      $http.delete($scope.url, config)
        .success(function (data, status, headers, config)
        {
          $scope.deleteCallResult = logResult("success in delete", data, status, headers, config);
        })
        .error(function (data, status, headers, config)
        {
          $scope.deleteCallResult = logResult("error in delete", data, status, headers, config);
        });
    };
    }

    );
    
})
 (window.angular);
