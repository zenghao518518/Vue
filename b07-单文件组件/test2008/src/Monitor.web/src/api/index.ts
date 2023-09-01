import axios,{type AxiosRequestConfig,AxiosResponse} from 'axios'


axios.defaults.baseURL='/api';

//请求拦截器
axios.interceptors.request.use((config:AxiosRequestConfig|any)=>config);

//响应拦截器
axios.interceptors.response.use((res:AxiosResponse)=>{
    //添加处理函数的地方
    //if(res==)

    return res
},err=>{
    return Promise.reject(err)
});


interface IHttp{
    request<T>(method:string,url:string,params?:unknown):Promise<T>;
}

const http :IHttp={
      request:(method,url,params)=>axios({
              method:method,
              url:url,
              data:params
            })

}
//export default axios;
export default http;