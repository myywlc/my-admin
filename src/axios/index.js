import jsonp from 'jsonp';
import axios from 'axios'
import { message } from 'antd'

export default class Axios {

	static jsonp(options) {
		return new Promise((resolve, reject) => {
			jsonp(options.url, {
				param: 'callback'
			}, (err, response) => {
				if (response.status === 'success') {
					resolve(response)
				} else {
					reject(response.message)
				}
			})
		})
	}

	static ajax(options) {
		let baseApi = '';
		return new Promise((resolve, reject) => {
			axios({
				url: options.url,
				method: 'get',
				baseURL: baseApi,
				timeout: 5000,
				params: (options.data && options.data.params) || '',
			}).then((response) => {
				if (response.status === 200) {
					let res = response.data;
					if (res.code === 0) {
						resolve(res);
					} else {
						message.error(res.msg)
					}
				} else {
					reject(response.data)
				}
			})
		})
	}

}