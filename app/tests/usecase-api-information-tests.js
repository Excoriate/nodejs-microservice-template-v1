const toTest = require('../lib/application/use-case/api-information/usecase-api-information');
const assert = require('chai').assert;


describe('Testing service-api-information', () =>{

	it ('Should return all the environment variables configured in the Host ',() =>{
		toTest.getEnvironmentVarService()
			.then(testResult => {

				assert.equal(testResult.status, 0);
				assert.isTrue(testResult.flag);
				assert.isNotEmpty(testResult.log);
				assert.isDefined(testResult.result);

				console.log(JSON.stringify(testResult.result));

			}).catch(err=>{
				console.log(err);
			});
	});

	it('Should return all the API information and configuration', () => {
		console.log('Starting test...');

		toTest.getApiInformationService()
			.then(testResult =>{
				console.log('Successfully resolved promise. ');

				assert.equal(testResult.status, 0);
				assert.isTrue(testResult.flag);
				assert.isNotEmpty(testResult.log);
				assert.isDefined(testResult.result);

			}).catch(err=>{
				console.error(err);
			});

	});

	it('Should return the process time that the NodeJs process has been running', () => {
		toTest.getApiUptimeService()
			.then(testResult =>{
				console.log('Successfully resolved promise. ');

				assert.equal(testResult.status, 0);
				assert.isTrue(testResult.flag);
				assert.isNotEmpty(testResult.log);
				assert.isDefined(testResult.result);

				console.log(JSON.stringify(testResult.result));
				console.info('Execution time: %dms', testResult.result);

			}).catch(err=>{
				console.error(err);
			});
	});

});