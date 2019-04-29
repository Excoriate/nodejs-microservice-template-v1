
const configurationSummary =require('./microservice-configuration.json');
const logSentryConfiguration = require('../logs/logs-sentry.json');
const informationSummary = require('./microservice-information.json');

const globalConfiguration = {
	about: {
		owner: informationSummary.api_information.Company,
		name: informationSummary.api_information.name,
		version: informationSummary.api_information.version,
		author: informationSummary.api_information.author
	},
	
	configuration: {
		configuration: configurationSummary,
		logger: logSentryConfiguration
	}
};


module.exports = globalConfiguration;