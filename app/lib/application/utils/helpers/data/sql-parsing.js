
const stringUtilitiesServices = require('./string-chars');

const sqlParserService = {
	
	parseSqlWithParameters : (sql, param, withQuotes) => {
		
		return new Promise((resolve, reject) =>{
			let log;
			let flagWithErrors = false;
			let configurationObject = {};
			console.log('Info parseSqlWithParameters | Attempting to parse sql parameters.');
			
			if(sql ==='' || sql === undefined){
				log = 'Error parseSqlWithParameters | Cannot continue. Invalid SQL received';
				flagWithErrors = true;
			}else{
				if(param ==='' || param ===undefined){
					log = 'Error parseSqlWithParameters | Cannot continue. Invalid PARAM received';
					flagWithErrors = true;
				}else{
					console.log(`Info parseSqlWithParameters | SQL received => ${sql}`);
					console.log(`Info parseSqlWithParameters | parameter received => ${param}`);
					
					if(withQuotes !== undefined && withQuotes !== false){
						console.log('Info parseSqlWithParameters | the option WITHQUOTE was received in true.');
						
						configurationObject = {
							toBeFound: '@PARAM',
							toBePutInPlaceOf: `'${param}'`
						};
					}else{
						console.log('Info parseSqlWithParameters | no QUOTE has been received for this parsing operation');
						configurationObject = {
							toBeFound: '@PARAM',
							toBePutInPlaceOf: param
						};
					}
					console.log('Info parseSqlWithParameters | Calling util service for search and replace in json string');
					stringUtilitiesServices.searchAndReplaceInJSonString(sql, configurationObject)
						.then(finalSql => {
							console.log('Info parseSqlWithParameters | Successfully obtained parsed SQL with parameters.');
							console.log(finalSql.result);
							resolve({
								status: 'Success',
								message: 'Successfully obtained parsed SQL.',
								result: finalSql.result
							});
						
						}).catch(err=>{
							log = `Error parseSqlWithParameters | Error calling the cross function for parse string with specific parameters.  Error details => ${err}`;
							reject({
								status: 'Error',
								message: log,
								result:  {}
							});
						});
				}
			}
			
			if(flagWithErrors){
				console.log(log);
				reject({
					status: 'Error',
					message: log,
					result : {}
				});
			}
		
		});
	},
	
	

	
};

module.exports = sqlParserService;