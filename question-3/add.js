const fs = require('fs').promises
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

const addLogFiles = async () => {
    try{
        if(!(await fs.access(logsDir)
            .then(() => true)
            .catch(() => false))){
               await fs.mkdir(logsDir) 
        }
        process.chdir(logsDir)

        for (let i = 0; i < 10; i++){
            const fileName = `log${i}.txt`
            await fs.writeFile(fileName,`This is log file ${i}`)
            console.log(`${fileName}`)
        }

    }catch(e){
        console.error(e)
    }
}
addLogFiles()