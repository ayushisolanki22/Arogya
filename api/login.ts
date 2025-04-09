import APICore from './apiCore'

const api = new APICore() 


export const Login = (params:any) => {
    const baseUrl = "/api/login";
    return api.create(`${baseUrl}`, params !== undefined ? params : {});
  };