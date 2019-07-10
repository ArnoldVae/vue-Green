import axios from 'axios'
import { Loading } from 'element-ui';
let loadingInstance = {}
 // 创建axios实例
 const options =  {
 		baseURL:process.env.VUE_APP_BASE_URL, 
 		timeout:30000
 }
 const service = axios.create(options)
 // loading var loadingService request拦截器
 service
 		.interceptors
 		.request
 		.use(request =>  {
			//默认Content-Type = application/json;charset=utf-8
			//暂时修改为form传参
			request.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8"; //Content-Type : "application/json;charset=utf-8"

			if(!request.data){
				request.data={
					params:{},
					auth:{},
				}
			}
			else{
				if(!request.data.params){
					request.data.params={}
				}
				if(!request.data.auth){
					request.data.auth={}
				}
			}
			request.data = "params="+encodeURIComponent(JSON.stringify(request.data.params))
			+"&auth="+encodeURIComponent(JSON.stringify(request.data.auth))

			// request.data = {
			// 	params:request.data,
			// 	auth:{

			// 	}
			// }
			loadingInstance = Loading.service({
				lock: true,
				body: true,
				fullscreen: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: 'rgba(250, 250, 250, 0.1)'
			})
			return request;
 		}, error =>  {
 				// something with request error
				Promise.reject(error)
 		})

 // respone拦截器
service
		.interceptors
		.response
		.use(response =>  {
			if (response && response.data && response.data.code === 100) {
				console.log('当前用户未登录，跳转连接');
			}
			loadingInstance.close()
			return response.data; 

 				/**
          * code为非200是错误的请求
          */
 				// if (response.status !== 200) {
 				// 		if (response.status === 201) {
				// 				// 发出被登出广播
				// 		}
				// 		return Promise.reject('error')
 				// } else {
 				// 		// 提示
				// 		if (response.data.code === 200) {
				// 				console.log('请求成功')
				// 				return response.data
 				// 		} else {
 				// 				console.log('网络异常')
 				// 		}
				// }
		}, error =>  {
            loadingInstance.close()
			return {
				"code": 500,
				"msg": "网络异常，请稍后再试",
			}; 

			// 错误提示
			// console.log('========= error2 =========')
			// return Promise.reject(error)
		})

 export default service
