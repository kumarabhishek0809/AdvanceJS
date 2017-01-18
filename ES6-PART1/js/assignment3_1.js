/*
Create an object apiDetail which should contain:
● baseUrl
● Method
● Request api parameter (i.e. /user)
● Header
● Post data if method is post
Pass that object in function where make an API call.
*/
"use strict";
var API = (function () {
    function API(baseUrl, method, requestApi, header, post) {
        this.baseUrl = baseUrl;
        this.method = method;
        this.requestApi = requestApi;
        this.header = header;
        this.post = post;
        this.baseUrl = baseUrl;
        this.requestApi = requestApi;
        this.header = header;
        this.post = post;
    }
    return API;
}());
exports.__esModule = true;
exports["default"] = API;
