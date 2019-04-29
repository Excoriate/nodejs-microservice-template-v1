
const environmentManager = {


	//Return the environment variables configured in the current environment.
	//Final version
	getEnvironmentVariableStatus :  () =>{

		console.log(`Trying to get environment variables from the current node process at -> ${new Date().toISOString().slice(0, 10)}`);
		return new Promise((resolve)=>{

			let resultObject = {
				NODE_ENV : process.env.NODE_ENV,
				PORT_EXPOSE : process.env.PORT_EXPOSE,
				PORT_CONTAINER : process.env.PORT_CONTAINER,
				PORT_HOST : process.env.PORT_HOST,
				PORT_DEBUG_HOST: process.env.PORT_DEBUG_HOST,
				WORKING_DIR: process.env.WORKING_DIR,
				CONTAINER_NAME: process.env.CONTAINER_NAME,
				CONTAINER_IMAGE_ID: process.env.CONTAINER_IMAGE_ID,
				VOLUME_HOST: process.env.VOLUME_HOST,
				VOLUME_CONTAINER: process.env.VOLUME_CONTAINER,
				SENTRY: process.env.SENTRY
			};

			if (resultObject.PORT_EXPOSE === undefined){
				//We are in a development environment, testing this directly using NPM start.
				resultObject.PORT_EXPOSE = 3000;
			}


			let log=  `Local (host) environment object loaded -> ${JSON.stringify(resultObject)}`;

			resolve({
				result: resultObject,
				log: log,
				flag: true,
				status: 0
			});
		});
	},

	//Return environment variables configured in .env file. Only for development purposes.
	getEnvVariablesByFile : (env) =>{
		console.log(`Environment configuration received to be managed -> ${JSON.stringify(env)}`);

		return new Promise((resolve)=>{
			if(env){
				console.log('The environment configuration is used in local.  using .ENV  file');

				let resultObject = {
					NODE_ENV : process.env.DEV_NODE_ENV,
					NODE_PORT : process.env.DEV_NODE_PORT,
					NODE_EXTERNAL_PORT : process.env.DEV_NODE_PORT_EXTERNAL,
					SENTRY_ID : process.env.DEV_SENTRY_ID
				};

				let log=  `Temporal environment object loaded -> ${JSON.stringify(resultObject)}`;
				console.log(log);

				resolve({
					result : resultObject,
					log : log,
					flag : true,
					status: 0
				});
			}else{
				console.log('Getting default (and hosted) environment variables. Parameter was received as FALSE');
				environmentManager.getEnvironmentVariableStatus().then(result=>{
					resolve(result);
				});
			}
		});
	}
};

module.exports = environmentManager;