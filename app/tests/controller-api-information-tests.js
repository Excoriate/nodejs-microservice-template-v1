const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('API and endpoints that return basic micro service information',  () => {

	it ('Will receive the information triggering /tupromoalpaso/api/settings/info/service', () =>{

		let endpoint = '/ideaup/api/configuration/info/service/';

		chai.request('http://localhost:3000')
			.get(endpoint)
			.end((err, res) => {
				console.log(err);
				console.log(res.body);
				expect(res).to.have.status(200);
			});
	});

	it ('Will receive the information for environment variables triggering /tupromoalpaso/api/settings/info/env', () =>{
		let endpoint = '/ideaup/api/configuration/info/env/';

		chai.request('http://localhost:3000')
			.get(endpoint)
			.end((err, res) => {
				console.log(err);
				console.log(res.body);
				expect(res).to.have.status(200);
			});
	});

	it ('Will return the uptime, in miliseconds triggering the url /tupromoalpaso/api/settings/info/uptime', () =>{
		let endpoint = '/ideaup/api/configuration/info/uptime/';

		chai.request('http://localhost:3000')
			.get(endpoint)
			.end((err, res) => {
				console.log(err);
				console.log(res.body);
				expect(res).to.have.status(200);
			});
	});


});