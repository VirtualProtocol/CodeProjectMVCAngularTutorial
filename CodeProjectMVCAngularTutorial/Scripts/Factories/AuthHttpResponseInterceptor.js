﻿// Borrowed from SparkTree Blog
// http://blog.thesparktree.com/post/75952317665/angularjs-interceptors-globally-handle-401-and-other

var AuthHttpResponseInterceptor = function ($q, $location)
{
    return
    {
        response: function (response)
        {
            if (response.status === 401)
            {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection)
        {
            if (rejection.status === 401)
            {
                console.log("Response Error 401", rejection);
                $location.path('/login').search('returnUrl', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location'];