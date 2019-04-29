const yaml = require('js-yaml');
const fileUtil = require('./files-folders');
const fileSystem = require('fs');


const yamlReader = {

	readYamlAsync :  (fileName) => {

		let log;
		return new Promise((resolve, reject) => {
			console.log(`Trying to find the requested fileName -> ${fileName}`);

			if(fileName === undefined || fileName  === '' || !isNaN(fileName)){
				log = `Invalid file received. File rejected ->   ${JSON.stringify(fileName)}`;
				console.error(log);

				reject({
					status: -1,
					flag: false,
					log: log,
					result: undefined
				});
			}else{
				fileUtil.findFileInNodeDirProcess(fileName).then(searchResult =>{
					log = `File returned -> ${JSON.stringify(searchResult)}`;
					console.log(log);

					let yamlFile = yaml.safeLoad(fileSystem.readFileSync(searchResult.result, 'utf8'));
					console.log(JSON.stringify(yamlFile));
					log = 'Successfully returned YAML file.';
					console.log(log);

					resolve({
						status : 0,
						log: log,
						result: yamlFile,
						flag:true
					});

				}).catch(err=>{
					log = `Error trying to find the requested file. Error details  -> ${err}`;
					console.error(log);
					reject(err);
				});
			}
		});
	}
};

module.exports = yamlReader;
