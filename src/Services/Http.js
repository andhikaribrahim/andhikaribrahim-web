import axios from 'axios';
// Define baseUrl base on NODE_ENV variable
const baseUrl = process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:4000/' : '/blog/';

const Blog = axios.create({
	baseUrl: baseUrl,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
	transformRequest: [
		(data) => JSON.stringify(data)
	],
	validateStatus: (status) => {
		return status < 400;
	}
});