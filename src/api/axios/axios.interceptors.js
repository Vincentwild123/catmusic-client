import instance from './instance'
//define interceptor
//add a request interceptor
instance.interceptors.request.use(function (config) {
    //do something before send request
    let date = new Date().toLocaleTimeString();
    console.log("%c%s", "color:black;font-size:12px;font-weight:800", "Request Send " + "(" + date + ")")
    console.dir(config);
    return config;
}, function (error) {
    // do something when error
    return Promise.reject(error);
});
// add a response interceptor
instance.interceptors.response.use(function (response) {
    // do something after receive response
    let date = new Date().toLocaleTimeString();
    console.log("%c%s", "color:black;font-size:12px;font-weight:800", "Response Receive " + "(" + date + ")")
    console.dir(response)
    return response.data;
}, function (error) {
    // do something when error
     return Promise.reject(error);
});

export default instance;