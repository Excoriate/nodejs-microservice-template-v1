
const file_system = require('fs');
const validator = require('../data/data-management');
const find = require('find');

const filesFolders = {

	readAllFilesFromPathSyncOrAsync: (dirPath, option) =>{
		return new Promise((resolve, reject) => {
			let log;
			let collectionOfFiles = [];

			if(dirPath === undefined || dirPath === null || dirPath ===''){
				log = `Error. DirPath parameter received is empty, null or invalid. Environment received -> ${JSON.stringify(dirPath)}`;
				console.warn(log);

				reject({
					status: 1,
					log: log,
					result: undefined,
					flag: false
				});
			}else{

				if(!file_system.existsSync(dirPath)){

					log = `Error. File or path cannot be found or doest not exists. Filepath received -> ${JSON.stringify(dirPath)}`;
					reject({
						status: -1,
						log: log,
						result: undefined,
						flag: false
					});
				}else{

					if(option.encoding === undefined || option.encoding===''){
						log = 'Error. Encoding parameter received invalid.';
						reject({
							status: 1,
							log: log,
							result: undefined,
							flag: false
						});
					}else{
						let iterator =0;
						console.log('Exploring the requested path / directory in a sync mode');

						let tempArrayOfFiles = file_system.readdirSync(dirPath, option);

						for(let file in tempArrayOfFiles){

							let auxPath = `${dirPath}${tempArrayOfFiles[file]}`;
							collectionOfFiles.push(auxPath);
							iterator++;
							log = `Total number of files added -> ${JSON.stringify(iterator)}`;

							//if((iterator + 1) === tempArrayOfFiles.length){
							if(iterator === tempArrayOfFiles.length){

								resolve({
									status: 0,
									log: log,
									result: collectionOfFiles,
									flag: true
								});
							}
						}
					}
				}
			}
		});
	},

	readFileSyncOrAsync: (filePath, option) => {
		return new Promise((resolve, reject) => {
			let log;
			let fileReaded;

			if(filePath === undefined || filePath === null || filePath ===''){
				log = `Error. FileName parameter received is empty, null or invalid. Environment received -> ${JSON.stringify(filePath)}`;
				console.warn(log);

				reject({
					status: 1,
					log: log,
					result: undefined,
					flag: false
				});
			}else{
				console.log(`Using encoding info configuration -> ${JSON.stringify(option.encoding)}`);

				if(!file_system.existsSync(filePath)){

					log = `Error. File or path cannot be found or doest not exists. Filepath received -> ${JSON.stringify(filePath)}`;
					reject({
						status: -1,
						log: log,
						result: undefined,
						flag: false
					});

				}else{
					if(option.encoding === undefined || option.encoding===''){
						log = 'Error. Encoding parameter received invalid.';
						reject({
							status: 1,
							log: log,
							result: undefined,
							flag: false
						});
					}else{
						if(option.sync){
							console.log('Reading the requested file in a sync mode.');
							fileReaded = file_system.readFileSync(filePath, option.encoding);
						}else{
							console.log('Reading the requested file in a async mode.');
							file_system.readFile(filePath, option.encoding, (err, data)=>{
								fileReaded = data;
							});
						}
						log = `Successfully reading. Process completed. Returning object -> ${JSON.stringify(fileReaded)}`;

						resolve({
							status: 0,
							log: log,
							result: fileReaded,
							flag: true
						});
					}
				}
			}
		});
	},

	findFileInNodeDirProcess :  (fileName) => {

		return new Promise((resolve, reject)=>{
			let log;
			let rootDir = process.cwd();
			console.log(`trying to ready YAML file -> ${fileName}`);
			console.log(`DIRNAME -> ${rootDir}`);

			try {
				find.file(rootDir, (fileResult) =>{

					console.log(JSON.stringify(fileResult));
					console.log(`Number of files found -> ${fileResult.length}`);

					let searchCounter =0;

					fileResult.forEach((file) => {
						let fileAux = file;

						console.log(`Checking file -> ${fileAux}`);

						if (fileAux.includes(fileName)){
							console.log(`FileName searched found -> ${fileAux}`);
							resolve({
								status: 0,
								log: log,
								result: fileAux,
								flag: true
							});
						}else{
							searchCounter++;
							log = `FileName searched not found. Continue looking..  Search number # -> ${JSON.stringify(searchCounter)}`;
							console.warn(log);
							reject({
								status: 1,
								log: log,
								result: undefined,
								flag: false
							});
						}
					});
				});
			}
			catch (e) {
				log = `Error. Function rejected. Error details -> ${JSON.stringify(e)}`;
				console.error(log);
				reject({
					status: -1,
					log: log,
					result: undefined,
					flag: false
				});
			}
		});
	},

	checkPathIfExists:(fullPath)=>{
		return new Promise((resolve, reject)=>{

			let failed = '';
			console.log(`Info (checkPathIfExists) -> Checking if file exists. Path received: ${fullPath}`);
			validator.isParameterNotNullOrEmptyPromise(fullPath).then(isOKay =>{

				console.log(`Info (checkPathIfExists) -> parameter successfully validated. Checking file.${isOKay}`);
				console.log(`Info (checkPathIfExists) -> result of file exists: ${file_system.existsSync(fullPath)}`);
				resolve(file_system.existsSync(fullPath));

			}).catch(err =>{
				failed = 'Error (checkPathIfExists) -> invalid parameter.';
				reject (err + failed);
			});
		});
	}


};


module.exports = filesFolders;