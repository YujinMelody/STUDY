import axios from "axios";
import serverConfig from "./config";

const myAxios = axios.create(
    {
        //指定根地址，方便代码编写
        baseURL: serverConfig.baseURL,
        // 设置超时限制
        timeout: 5000,
        // 不允许跨域cookie
        withCredentials: false
    }
);
export default myAxios;
//设置请求拦截器
// myAxios.interceptors.request.use(
//     (config => {
//         if (serverConfig.useTokenAuthorization) {
//             config.headers["Authorization"] = localStorage.getItem("item");
//         }
//         if (!config.headers["content-type"]) {
//             if (config.method === "post") {
//                 config.headers["content-type"] = "application/x-www-form-urlencoded";
//                 config.data = qs.stringify(config.data);
//             } else {
//                 config.headers["content-type"] = "application/json";
//             }
//         }
//         console.log("请求配置", config);
//     },
//         (error) => {
//             Promise.reject(error);
//         }
//     )
// )