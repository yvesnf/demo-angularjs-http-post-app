homeModule.service("HomeService", function($http) {

    var interfice = {

        postForm: function(obj) {
            var promise = new Promise(function(resolve, reject) {
                $http({
                    method: "POST",
                    url: "https://jsonplaceholder.typicode.com/posts",
                    data: obj
                }).then(
                    function successCallback(response) {

                        resolve(response.data);
                    },
                    function errorCallback(response) {
                        reject(response.status);
                    }
                );
            });

            return promise;
        },

    };

    return interfice;
});