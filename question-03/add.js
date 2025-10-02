/*

Create Log files
- create a Logs directory, if it does not exist
- change the current process to the new Logs directory
- create 10 log files and write some text into the file

*/

const fs = require('fs');

const logsDirectory = "./Logs";

try {
    if(!fs.existsSync(logsDirectory)){
        fs.mkdirSync(logsDirectory);
    }
    process.chdir(logsDirectory);
    for(let i = 0; i < 10; i++){
        fs.writeFileSync(`log${i}.txt`, `This is log file number ${i}`);
        console.log(`Created file: log${i}.txt`);
    }
}catch (err){
    console.error(err);
}




