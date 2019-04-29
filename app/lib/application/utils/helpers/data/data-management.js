
const objectUtilities = require('./objects');

const validator = {

	isParameterNumeric:(numberString) => {
		return new Promise((resolve, reject) => {
			let log;
			let validation = false;
			console.log('Info isParameterNumeric | Attempting to validate if a string is or not numeric.');

			if (numberString !== undefined && numberString !== '') {
				console.log('Info isParameterNumeric | Parameter valid. Starting validation.');
				validation = !Number.isNaN(numberString);

				log = validation ? `Info isParameterNumeric | the parameter received is numeric. Parameter: ${numberString}` : `Warning isParameterNumeric | the parameter received is not numeric. Parameter: ${numberString}`;

				console.log(log);

				resolve({
					status: 'Success',
					message: log,
					result: validation
				});

			} else {
				log = 'Error isParameterNumeric | The parameter received is invalid. NULL.';
				console.log(log);

				reject({
					status: 'Error',
					message: log,
					result: {}
				});
			}


		});
	},

	createArrayFromStringWithCommas: (source, char)=>{
		return new Promise((resolve, reject)=>{
			console.log(`Info (createArrayFromStringWithCommas) -> Starting add chart into string. Source string: ${source}`);
			console.log(`Info (createArrayFromStringWithCommas) -> Starting add chart into string. Special Char: ${char}`);

			let finalStr = source.split(char);
			let failed = '';

			if(finalStr !== undefined){
				console.log('Info (createArrayFromStringWithCommas) -> successfully created array. ');
				console.log(finalStr);
				resolve(finalStr);
			}else{
				failed = 'Error (createArrayFromStringWithCommas) -> array was not created. Something happened.';
				console.log(failed);
				reject(failed);
			}

		});
	},

	//Alex: Search in a string, if the current string has included logical  operator.
	//RETURN [OPERATOR FINDED]
	checkIfThereisAnyLogicalOperator: (source) =>{
		return new Promise((resolve, reject)=>{
			console.log(`Info (checkIfThereisAnyLogicalOperator) -> Searching for special char or operator in the source string: ${source}`);

			let failed = '';
			let logicOperatorPromise = objectUtilities.getLogicalOperators();


			console.log('Info (checkIfThereisAnyLogicalOperator) -> Searching if the String contains LOGICAL operators...');
			logicOperatorPromise.then(array=>{

				for(let i=0; i<= array.length; i++){
					if(source.includes(array[i].toString())){
						console.log('Info (checkIfThereisAnyLogicalOperator) -> Successfully finded Logical operator in string.');
						console.log(`Info (checkIfThereisAnyLogicalOperator) -> Operator finded: ${array[i].toString()}`);
						resolve(array[i].toString());
					}else{
						resolve('NO'); //This return string should tell to the request function. I don't find a logical operator.
					}
				}

			}).catch(err=>{
				failed = 'Error (checkIfThereisAnyLogicalOperator) -> Something failed invoking promise that returns an array of logical chars.';
				console.log(err);
				console.log(failed);
				reject('ERROR');
			});


		});
	},


	isParameterNotNullOrEmpty :(param) =>{
		let result;
		result = !(param === undefined || param === '' || param == null);

		return result;
	},

	isParameterNotNullOrEmptyPromise:(param)=>{
		return new Promise((resolve, reject)=>{
			console.log(`Info isParameterNotNullOrEmptyPromise: -> Starting validation process for parameter:  ${param}`);
			if ((param !== undefined && param !== '' || param !== null)) {
				console.log(`Info isParameterNotNullOrEmptyPromise: the parameter received was successfully validated. Parameter: ${param}`);
				resolve('_success_');
			} else {
				console.log('Warning isParameterNotNullOrEmptyPromise: the parameter received dont pass the validation.');
				reject('_error_');
			}
		});
	}
};


module.exports =  validator;