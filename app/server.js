const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const envManager = require('./lib/application/config/environment/environment-manager');


const sentry = require('raven');
const configuration = require('./lib/application/config/microservice/microservice-configuration');
const microService = new koa();
const allRoutes = require('./lib/presenter/routers/router-composer');

sentry.config(configuration.configuration.logger,
	{
		captureUnhandledRejections: true
	}).install();

sentry.context(() => {
	microService.use(bodyParser());
	microService.use(koaLogger());
	microService.use(allRoutes.routes());

	envManager.getEnvironmentVariableStatus().then(env=>{
		const port = env.result.PORT_EXPOSE;

		microService.listen(port, '0.0.0.0' , () =>{
			console.log(`Environment variables configured -> ${JSON.stringify(env.result)}`);
			console.log(`${configuration.about.name} port configured  -> : ${port}`);
			console.log(`App Author: ${configuration.about.owner}`);
			console.log(`App Version: ${configuration.about.version}`);
			console.log(`Created by: ${configuration.about.author}`);
		});
	});
});

//module.exports = microService.listen(3000);
