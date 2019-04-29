const KoaRouter = require( 'koa-router');


const apiRouter = new KoaRouter({
	prefix: '/configuration/info'
});

//Alex: only for testing purposes.
const apiInformationController = require('../controllers/api-information/controller-api-information');


apiRouter.get('/service/', apiInformationController.getBasicApiInformation);
apiRouter.get('/env/', apiInformationController.getEnvironmentVar);
apiRouter.get('/uptime/', apiInformationController.getServiceUptime);

module.exports = apiRouter	;