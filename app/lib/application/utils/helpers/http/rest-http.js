
const axios = require('axios');

const httpRequester = {

	httpCallWithJsonPayload: (uri, httpVerb, jsonPayload) => {
		return new Promise((resolve, reject) => {
			let failed = '';
			console.log('Info httpCallWithJsonPayload -> Executing an http requested using requestify. The mode selected is: Complex (with Json Payload object). ');
			console.log(`Info httpCallWithJsonPayload -> uri received: ${uri}`);
			console.log(`Info httpCallWithJsonPayload -> http method to be executed: ${httpVerb}`);
			console.log(`Info httpCallWithJsonPayload -> json Payload object to be pass as parameter \n: ${jsonPayload}`);

			switch (httpVerb.toUpperCase()) {

			case 'POST':
				console.log('Info httpCallWithJsonPayload: executing POST request call.');

				var postConfig = {
					headers: {
						contentType: 'application/json'
					}
				};

				axios.post(uri, jsonPayload, postConfig)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallWithJsonPayload: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallWithJsonPayload: body response -> \n${response.data}`);
						console.log(`Info httpCallWithJsonPayload: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallWithJsonPayload: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallWithJsonPayload: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallWithJsonPayload: the post request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});

				break;

			case 'PUT':
				console.put('Info httpCallWithJsonPayload: executing GET request call.');
				axios.get(uri, jsonPayload
				)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallWithJsonPayload: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallWithJsonPayload: body response -> \n${response.data}`);
						console.log(`Info httpCallWithJsonPayload: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallWithJsonPayload: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallWithJsonPayload: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallWithJsonPayload: the post request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});
				break;

			case 'GET':
				console.log('Info httpCallWithJsonPayload: executing GET request call.');

				var config = {
					headers: {
						contentType:'application/json'
					}
				};

				axios.get(uri, jsonPayload, config)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallWithJsonPayload: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallWithJsonPayload: body response -> \n${response.data}`);
						console.log(`Info httpCallWithJsonPayload: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallWithJsonPayload: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallWithJsonPayload: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallWithJsonPayload: the post request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});
				break;
			}

		});
	},

	httpCallSimple: (uri, httpVerb) => {
		return new Promise((resolve, reject) => {

			let failed = '';
			console.log('Info httpCallSimple -> Executing an http requested using axios. The mode selected is: Simple (without any json Payload.). ');
			console.log(`Info httpCallSimple -> uri received: ${uri}`);
			console.log(`Info httpCallSimple -> http method to be executed: ${httpVerb}`);

			switch (httpVerb.toUpperCase()){
			case 'POST':
				console.log('Info httpCallSimple: executing POST request call.');

				var config = {
					headers: {
						contentType:'application/json'
					}
				};

				axios.post(uri, config)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallSimple: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallSimple: body response -> \n${response.data}`);
						console.log(`Info httpCallSimple: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallSimple: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallSimple: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallSimple: the post request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});

				break;


			case 'PUT':
				console.put('Info httpCallSimple: executing GET request call.');
				axios.get(uri)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallSimple: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallSimple: body response -> \n${response.data}`);
						console.log(`Info httpCallSimple: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallSimple: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallSimple: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallSimple: the post request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});
				break;

			case 'GET':
				console.log('Info httpCallSimple: executing GET request call.');

				var configGet = {
					headers: {
						'Content-Type': 'application/json; charset=utf-8'
					}
				};

				axios.get(uri, configGet)
					.then(function (response) {
						let serverResponse = response.data;
						console.log('Info httpCallSimple: Successfully executed POST http request to external backend API.');
						console.log(`Info httpCallSimple: body response -> \n${response.data}`);
						console.log(`Info httpCallSimple: HTTP status code -> \n${response.status}`);
						console.log(`Info httpCallSimple: HTTP response headers-> \n${response.headers}`);
						console.log(`Info httpCallSimple: HTTP request that was passed as configuration-> \n${response.config}`);

						resolve(serverResponse);
					})
					.catch(function (err) {
						failed = `Error httpCallSimple: the get request has failed. Check the error details: Error \n:  ${err} Error timestamp: ${Date.now()}`;
						console.log(failed);
						reject(failed);
					});
				break;
			}


		});
	}

};


module.exports = httpRequester;