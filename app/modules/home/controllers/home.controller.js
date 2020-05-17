homeModule.controller("HomeController", function HomeController($scope, HomeService) {
    $scope.test = "HOME CONTROLLER WORKING!";

    $scope.model = {
        userId: undefined,
        title: undefined,
        body: undefined
    };

    $scope.createdPost = undefined;

    $scope.formDisabled = true;

    $scope.$watch('model', function(newVal, oldVal) {

        if ((newVal.userId && newVal.title && newVal.body) != undefined) {
            $scope.formDisabled = false;
        } else {
            $scope.formDisabled = true;
        }

    }, true);

    $scope.submit = function() {

        if ($scope.newPostForm.$valid) {

            HomeService.postForm($scope.model)
                .then(function(res) {
                    $scope.createdPost = res;
                    $scope.$apply();
                })
                .catch(function(reason) {
                    console.log(reason);
                });

        }

    };

});