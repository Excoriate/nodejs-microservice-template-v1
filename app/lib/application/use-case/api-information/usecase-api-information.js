const environmentConfiguration = require('../../config/environment/environment-manager');
const configuration = require('../../config/microservice/microservice-configuration');

const apiInformation = {

	getEnvironmentVarService: () =>{

		return new Promise((resolve, reject)=>{

			console.log('Getting environment variables configured in the API.');
			let log;

			environmentConfiguration.getEnvironmentVariableStatus()
				.then(result=>{
					log = `Successfully obtained environment variables from HOST. Environment variables -> ${JSON.stringify(result.result)}`;
					console.log(log);

					resolve({
						result: result.result,
						log: log,
						flag: true,
						status: 0
					});
				}).catch(err=>{
					log = `Error. Rejected promise. Error details -> ${JSON.stringify(err)}`;
					console.error(log);
					reject(err);
				});
		});
	},


	getApiInformationService : () => {
		return new Promise((resolve) =>{
			console.log('Getting information of the current microService');
			let confInformation= configuration.configuration;
			let appInformation = configuration.about;

			let log = `Successfully obtained API configuration and information. 
			Configuration obtained -> ${JSON.stringify(confInformation)}`;

			resolve({
				status: 0,
				result: {
					info: appInformation,
					conf: configuration
				},
				log : log,
				flag: true
			});
		});
	},


	getApiUptimeService: ()=>  {
		return new Promise((resolve)  => {
			let processTime = process.hrtime();
			let processTimeInMiliSeconds = processTime[0] * 1000 + processTime[1] / 1000000;

			let log = `Time that NodeJs process is running -> ${JSON.stringify(processTimeInMiliSeconds)}`;
			resolve({
				status: 0,
				result: processTimeInMiliSeconds,
				log : log,
				flag: true
			});
		});
	}
};

module.exports = apiInformation;