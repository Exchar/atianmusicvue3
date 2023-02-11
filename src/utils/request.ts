import axios,{AxiosRequestConfig,AxiosResponse} from 'axios';

const axiosInstance = axios.create({
  baseURL:'/api',
  timeout: 100000
});

// 定义服务端接口返回的接口格式，其中data是主要数据
export type Response<T = any> = {
  massage?: string;
  code: number;
  list?: T;
  data?:T,
};

// axiosInstance.interceptors.response.use((res)=> {
//   const preRes = res.data;
//   console.log(preRes);
//   if(preRes && preRes.code===200){
//     return preRes;
//   }
//   return undefined;
//
// },err=> new Error(err));
export default <T>(config: AxiosRequestConfig) => {
  return new Promise<Response<T>>((res, rej) => {
    axiosInstance
      .request<Response<T>>(config)
      .then((response) => {
        console.log(response);
        if(response && response.data && response.status===200){
          res(response.data);
        }else{
          rej(response);
        }
      })
      .catch((err: any) => {
        console.log(err);
        rej(err);
      });
  });
};
