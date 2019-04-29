const stringChars ={
	
	checkIfSubStringExists : (sourceString, charToSearch) =>{
		return new Promise((resolve, reject) =>{
			let log;
			let isWithErrors = false;
			let validationResult = false;
			
			if(sourceString !== undefined && sourceString!== ''){
				if(charToSearch !== undefined && charToSearch!== ''){
					console.log('Info checkIfSubStringExists | Attempting to validate if a char or substring exists in a string.');
					console.log(`Info checkIfSubStringExists | source string received => ${sourceString}`);
					console.log(`Info checkIfSubStringExists | char to search received => ${charToSearch}`);
					
					validationResult = sourceString.includes(charToSearch);
					if(validationResult){
						log = `Info checkIfSubStringExists | Successfully found char => ${charToSearch} into source String = ${sourceString}`;
					}else{
						log = `Info checkIfSubStringExists | Char => ${charToSearch} not found in String = ${sourceString}`;
					}
					
					console.log(log);
					resolve({
						status: 'Success',
						message: log,
						result: validationResult
					});
					
				}else{
					isWithErrors = true;
					log = `Error checkIfSubStringExists | char to search received invalid or NULL.`;
				}
			}else{
				isWithErrors = true;
				log = `Error checkIfSubStringExists | source String received invalid or NULL. =>`;
			}
			
			if(isWithErrors){
				reject({
					status: 'Error',
					message: log,
					result: {}
				});
			}
		});
	},
	
	//Alex: Search in a string, for a specific value. Then, when it found it, replace original found value with
	// the parameter passed value. Received an object option object with this structure:
	//optionObject = {toBeFound: ''', toBePutInPlaceOf: ''}
	searchAndReplaceInJSonString : (sourceString, optionObject) =>{
		return new Promise((resolve, reject) =>{
			let log;
			let resultString;
			let requiredProperty1 =  'toBeFound';
			let requiredProperty2 =  'toBePutInPlaceOf';
			
			console.log('Info searchAndReplaceInJSonString | Attempting to search into JSON object, and replace it with values.');
			
			if(sourceString !== undefined && sourceString !== ''){
				
				let auxJsonParsedToString = JSON.stringify(sourceString);
				
				if(optionObject !== undefined){
					if(optionObject[requiredProperty1] !== undefined && optionObject[requiredProperty2] !== undefined){
						if(auxJsonParsedToString.includes(optionObject.toBeFound)){
							resultString = auxJsonParsedToString.replace(optionObject.toBeFound, optionObject.toBePutInPlaceOf);
							let logInfo = `Info searchAndReplaceInJsonString | Successfully replaced string value. Original value found => ${optionObject.toBeFound} and replace for => ${optionObject.toBePutInPlaceOf}`;
							
							console.log(logInfo);
							resolve({
								status: 'Success',
								message: logInfo,
								result: resultString
							});
							
						}else{
							log = 'Error searchAndReplaceInJSonString | The string searched was not found.'
						}
					
					}else{
						log = `Error searchAndReplaceInJSonString | the option object was received with data, but its bad formed. Cant continue. Option object details => ${JSON.stringify(optionObject)}`;
					}
				
				}else{
					log = 'Error searchAndReplaceInJSonString | the option object was received as NULL.';
				}
			
			}else{
				log = 'Error searchAndReplaceInJSonString | the source string was received as NULL or empty. ';
			}
			
			if( log !== undefined){
				reject({
					status: 'Error',
					message: log,
					result: {}
				});
			}
			
		});
	}
	
	
};

module.exports =  stringChars;