const config = {
    // the url you request 
    url: '/api/test',
    // the mothods of this request
    method: 'get', // default
    // the base url will unshift into the url you write in the parmas 
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
    // when cross origin,whether the request will cookie 
    withCredentials: false, // default
    // type of the reponse data
    reponseType: 'json'
}
export default config;