
const validator = require('../data/data-management');

const paths = {

	getFullPathFromFileName : (filename)=>{
		return new Promise((resolve, reject)=>{

			if(!validator.isParameterNotNullOrEmpty(filename)){
				console.log(`Attempting to get full path from filename -> ${filename}`);

				let rootPath = __dirname + '/information/files/google/';
				console.log(`Full path built -> ${rootPath}${filename}`);

				resolve(rootPath + filename);

			}else{
				let errorMsj= `Error: invalid filename or path. Filename -> ${filename} and base path formed-> ${__dirname + '/information/files/google/'}`;
				reject(errorMsj);
			}


		});
	}

};

module.exports =  paths;