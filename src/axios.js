import axios from 'axios';
// import { toast } from 'react-toastify';



let store;
export const injectStore = _store => {
    store = _store
}
    let apitoken = window.localStorage.getItem('ihmktoken');
// console.log('token', apitoken);
const defaultInstance = axios.create({baseURL: process.env.REACT_APP_API,
     headers: {Authorization: apitoken,'Access-Control-Allow-Origin': '*', "WWW-Authenticate": apitoken,
      "Content-Type": "application/problem+json; charset=utf-8", },});
      defaultInstance.interceptors.response.use(req =>{    return req})



export default defaultInstance;