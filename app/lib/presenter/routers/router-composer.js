const CoreRouter = require('koa-router');
const boomHttpErrorHandler= require('boom');

const allRoutes = new CoreRouter({
	prefix: '/ideaup/api'
});

const routerApiInformation = require('./router-api-information');
//const middlewareSignUp = require('./routes-middleware-signup');
//const middlewareApiAuth = require('./routes-middleware-auth');
//const specificRoutes = [middlewareSignUp, routerApiInformation, middlewareApiAuth];

const specificRoutes = [routerApiInformation];

for (let router of specificRoutes) {
	allRoutes.use(router.routes(), router.allowedMethods({
		throw: true,
		notImplemented: () => boomHttpErrorHandler.notImplemented(),
		methodNotAllowed: () => boomHttpErrorHandler.methodNotAllowed()
	}));
}

module.exports = allRoutes;



