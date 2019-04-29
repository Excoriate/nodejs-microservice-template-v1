const KEYS = Object.freeze({
	DEVELOPMENT : {
		DEV_RSA_PRIVATE: './config/security/env-dev/key-dev-signup-microservice',
		DEV_RSA_PUBLIC: './config/security/env-dev/key-dev-signup-microservice.pub',
		DEV_RSA_DIRPATH: './config/security/env-dev/'
	},

	QUALITIY : {
		QA_RSA_PRIVATE: './config/security/env-qa/key-qa-signup-microservice',
		QA_RSA_PUBLIC: './config/security/env-qa/key-qa-signup-microservice.pub',
		QA_RSA_DIRPATH: './config/security/env-qa/'
	},

	BETA: {
		BETA_RSA_PRIVATE: './config/security/env-beta/key-beta-signup-microservice',
		BETA_RSA_PUBLIC: './config/security/env-beta/key-beta-signup-microservice.pub',
		BETA_RSA_DIRPATH: './config/security/env-beta/'
	},

	PRODUCTION: {
		PROD_RSA_PRIVATE: './config/security/env-prod/key-prod-signup-microservice',
		PROD_RSA_PUBLIC: './config/security/env-prod/key-prod-signup-microservice.pub',
		PROD_RSA_DIRPATH: './config/security/env-prod/'
	},
});


module.exports =  {
	KEYS
};