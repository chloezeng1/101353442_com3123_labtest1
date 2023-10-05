const fs = require('fs').promises
const path = require('path')

const logsDir = path.join(__dirname, 'Logs');

const rmFileInDir = async(dirPath) => {
    const files = await fs.readdir(dirPath)
    for(const file of files){
        const filePath = path.join(dirPath, file)
        await fs.unlink(filePath)
        console.log(`deleted file.... ${file}`)
    }
}

(async () => {
    try{
        if(await fs.access(logsDir)
            .then(() => true)
            .catch(() => false)){
                await rmFileInDir(logsDir)
                await fs.rmdir(logsDir)
                console.log(`Deleted directory: Logs`)
            }else{
                console.log('Log directory not exist')
            }
        }catch(e){
            console.error(e)
        }
})()