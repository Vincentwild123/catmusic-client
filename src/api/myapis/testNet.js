import axios from '../axios/index.js'


export default function testNet(url) {
    return axios.get(url);
}