const os=require('os')   //this is a system module that why we dont have to use ./ here

//console.log(os)

console.log(`platform: ${os.platform()}`)
console.log(`total memory: ${os.totalmem()/(1024*1024*1024)} GB RAM`)
console.log(`free mememory: ${os.freemem()/(1024*1024*1024)} GB`)

console.log(`Hostname: ${os.hostname()}`)
console.log(`My Home Dir: ${os.homedir()}`)
console.log(`os architecture: ${os.arch()}`)


const cpus=os.cpus()
for(const c of cpus){
    console.log(c)
}
