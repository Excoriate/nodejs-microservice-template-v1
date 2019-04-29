const objectFactory = {

	getLogicalOperators: () => {
		return new Promise((resolve) => {
			let arrayOfOperators = ['AND', 'OR', 'BETWEEN', 'IN', 'NOT', '<>', '>', '<', '>=', '<='];
			console.log('Info (getLogicalOperators) -> Returning logical operators (for DynamoDB).');
			console.log(arrayOfOperators.toString());

			resolve(arrayOfOperators);
		});
	},

	getComparisionOperators: () => {
		return new Promise((resolve) => {
			let arrayOfOperators = ['<>', '>', '<', '>=', '<='];
			console.log('Info (getComparisionOperators) -> Returning comparision operators (for DynamoDB).');
			console.log(arrayOfOperators.toString());

			resolve(arrayOfOperators);
		});
	}


};


module.exports = objectFactory;