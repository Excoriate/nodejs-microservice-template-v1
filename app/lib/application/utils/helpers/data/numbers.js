
const dataUtilitiesService = require('./data-management');

const numberUtilitiesService = {
	
	getRoundedNumericValue : (value) =>{
		return new Promise((resolve, reject) =>{
			let log;
			let numericValidationServ = dataUtilitiesService.isParameterNumeric(value);
			console.log(`Info getRoundedNumericValue | Attempting to parse numeric value. Rounding value => ${value}`);
			
			if(value === undefined || value ===''){
				log = 'Error getRoundedNumericValue | The parameter received is null or empty. Please check it.';
				console.log(log);
				
				reject({
					status: 'Error',
					message: log,
					result: null
				});
			}else{
				numericValidationServ.
					then(isNumeric =>{
						console.log(`Info getRoundedNumericValue | Numeric value detected => ${value}`);
						console.log(isNumeric.message);
						let roundedValue = Math.round(value);
						
						log = `Info  getRoundedNumericValue  | Successfully rounded numeric value. Final value obtained => ${roundedValue}`;
						console.log(log);
						
						resolve({
							status: 'Success',
							message: log,
							result: roundedValue
						});
						
					}).catch(err=>{
						log = `Error getRoundedNumericValue | The isNumeric function has failed.  Returns an error. Error details =>  ${err}`;
						console.log(log);
						reject({
							status: 'Error',
							message: log,
							result: null
						});
					});
			}
		});
	
	},
	
	getCutDecimalValues: (value) =>{
		return new Promise((resolve, reject) =>{
			let log;
			let numericValidationServ = dataUtilitiesService.isParameterNumeric(value);
			console.log(`Info getCutDecimalValues | Attempting to parse numeric value. Trying to cut decimal values after the integer value => ${value}`);
			
			if(value === undefined || value ===''){
				log = 'Error getCutDecimalValues | The parameter received is null or empty. Please check it.';
				console.log(log);
				
				reject({
					status: 'Error',
					message: log,
					result: null
				});
			}else{
				numericValidationServ.
					then(isNumeric =>{
						console.log(`Info getCutDecimalValues | Numeric value detected => ${value}`);
						console.log(isNumeric.message);
						let auxSplitValue = value.toString().split('.')[0];
					
						log = `Info getCutDecimalValues | The numeric value was parsed. Keep integer part of the value => ${auxSplitValue}`;
						console.log(log);
					
						resolve({
							status: 'Success',
							message: log,
							result: auxSplitValue
						});
					}).catch(err=>{
						log = `Error getCutDecimalValues | The isNumeric function has failed.  Returns an error. Error details =>  ${err}`;
						console.log(log);
						reject({
							status: 'Error',
							message: log,
							result: null
						});
					});
			}
		});
		
	}
	
	

};

module.exports = numberUtilitiesService;
