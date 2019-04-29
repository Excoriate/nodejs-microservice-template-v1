const assert = require('chai').assert;

const toTest = require('../lib/application/config/environment/environment-manager');

describe ('Environment manager (variables, flags, etc.).', ()=>{

	describe('getEnvVariablesByFile | Get environment variables from File.', ()=>{

		it('Should get all environment variables from the .ENV file.', ()=>{

			toTest.getEnvVariablesByFile(true).then(testResult =>{
				console.log('Called promise function getEnvVariablesByFile! ');
				console.log('result object -> ' + JSON.stringify(testResult));

				assert.equal(testResult.flag, true);
				assert.isNotEmpty(testResult.log);
				assert.isNotNull(testResult.result);
				//assert.isFalse(testResult.result.NODE_ENV === undefined);
				//assert.isTrue(testResult.result.NODE_ENV === 'development');
			});
		});

		it('Should get all environment variables from the host', ()=>{

			toTest.getEnvVariablesByFile(false).then(testResult =>{
				console.log('Called promise function getEnvVariablesByFile! ');
				console.log(`result object -> ${JSON.stringify(testResult)}`);

				assert.equal(testResult.flag, true);
				assert.isNotEmpty(testResult.log);
				assert.isNotNull(testResult.result);
				//assert.isTrue(testResult.result.NODE_ENV !== undefined);
			});
		});
	});

	describe('getEnvironmentVariableStatus | Get environment variables from host', ()=>{

		it('Should get all environment variables from the host', ()=>{

			toTest.getEnvironmentVariableStatus().then(testResult =>{
				console.log('Called promise function getEnvironmentVariableStatus! ');
				console.log(`result object -> ${JSON.stringify(testResult)}`);

				assert.equal(testResult.flag, true);
			});
		});
	});
});


