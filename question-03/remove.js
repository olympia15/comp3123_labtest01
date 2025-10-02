/*

Remove Log files
- remove all the files from the Logs directory, if exists
- output the file names to delete
- remove the Logs directory

*/

const fs = require('fs');

const logsDirectory = "./Logs";

try {
    if(fs.existsSync(logsDirectory)){
        const files = fs.readdirSync(logsDirectory);
        for(const file of files){
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(`${logsDirectory}/${file}`);
        }
        fs.rmdirSync(logsDirectory);
    } else {
        console.log("Logs directory does not exist.");
    }        
}catch (err){
    console.error(err);
}