const serviceApiInformation = require('../../../application/use-case/api-information/usecase-api-information');


const uptimeEndpoint = {
    
	getBasicApiInformation:  (ctx) => {

		serviceApiInformation.getApiInformationService()
			.then(serviceResult => {

				ctx.status = 200;
				ctx.body = serviceResult.result;

			}).catch(err=>{
				ctx.status = 500;
				ctx.body ={
					message: err.log,
					code: err.status
				};

			});
	},

	getEnvironmentVar : (ctx) => {

		serviceApiInformation.getEnvironmentVarService()
			.then(serviceResult => {

				ctx.status = 200;
				ctx.body = serviceResult.result;

			}).catch(err=>{
				ctx.status = 500;
				ctx.body ={
					message: err.log,
					code: err.status
				};
			});
	},

	getServiceUptime : (ctx) =>{

		serviceApiInformation.getApiUptimeService()
			.then(serviceResult => {

				let bodyMessage = `MicroService uptime (in milliseconds) -> ${JSON.stringify(serviceResult.result)}`;

				ctx.status = 200;
				ctx.body = bodyMessage;

			}).catch(err=>{
				ctx.status = 500;
				ctx.body ={
					message: err.log,
					code: err.status
				};
			});

	}
};

module.exports = uptimeEndpoint;