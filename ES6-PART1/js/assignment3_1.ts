/*
Create an object apiDetail which should contain:
● baseUrl
● Method
● Request api parameter (i.e. /user)
● Header
● Post data if method is post
Pass that object in function where make an API call.
*/


export default class API {
    constructor(public baseUrl: String,
        public method: String, public requestApi: String, public header: String, 
        public post: String
    ) {this.baseUrl = baseUrl;
        this.requestApi = requestApi;
        this.header = header;
        this.post = post;
}
}

