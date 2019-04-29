
const formatCurrency = require('format-currency');

const formatUtilities = {

	formatNumberToCurency: (currencyCode, number) =>{
		return new Promise((resolve) =>{
			let log ='';
			console.log('Info formatNumberToCurency | Attempting to convert number to specific currency format');
			console.log(`Info formatNumberToCurency | currency mode => ${currencyCode}`);
			console.log(`Info formatNumberToCurency | number to convert => ${number.toLocaleString()}`);
            
			let option = undefined;
			let finalNumberFormatted;
    
			switch (currencyCode.toUpperCase()){
			case  'USD':
				option = {
					code: 'USD',
					format: '%s%v',
					symbol: '$'
				};
				break;
                    
			case 'CLP':
				option = {
					code: 'CLP',
					format: '%s%v',
					symbol: '$'
				};
				break;
    
			case 'EUR':
				option = {
					code: 'EUR',
					format: '%s%v',
					symbol: '$'
				};
				break;
			}
            
			finalNumberFormatted = formatCurrency(number, option);
            
			log = `Info formatNumberToCurency | Number successfully formatted. Number formatted => ${finalNumberFormatted}`;
			console.log(log);
            
			resolve({
				status: 'Success',
				message: log,
				result: finalNumberFormatted
			});
		});
	}

};

module.exports = formatUtilities;