const fs=require('fs')

// every function in javascript is by defautl asynchronous
// and if we want to use synchronous we have to special methods which there names contain 'Sync'

//console.log(fs)

const path='./data.txt'

function synchronousRead(){                   //Blocking Api (waiting) Synchrounous
    try{                    // exception e.g.-> if user put wrong file path name
    console.log('Started reading file')
    const data=fs.readFileSync(path)            // *******
    console.log('finished reading file')
    console.log(`data = ${data}`)
    }catch(ex){
        console.log(`exception = ${ex}`)
    }finally{
        console.log(`finally block called`)
    }

    console.log('Started evaluating expressions')
const answer= 62 * 72 * 11
console.log('completed evaluation')
console.log(answer);
}



synchronousRead()
