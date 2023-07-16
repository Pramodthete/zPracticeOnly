const fs=require('fs')

// every function in javascript is by defautl asynchronous
// and if we want to use synchronous we have to special methods which there names contain 'Sync'

//console.log(fs)

const path='./data.txt'

function asynchronousRead(){                   // Non Blocking Api (No waiting) A Synchrounous
    console.log('Started reading file')

        //this function will be called when readfile is done reading file on path
       fs.readFile(path,(error,data)=>{   //this is a call back function *******
                                        //readFile will call this function when done reading

            //callback function= we write function but someone else call that function                            
            console.log('finished reading file')
            console.log(`data = ${data}`)
            console.log(`error = ${error}`) // in case of error show error. if we dont print error No error will shown gives only data undefined
       })                                             


    console.log('Started evaluating expressions')
const answer= 62 * 72 * 11
console.log('completed evaluation '+ answer)
}



asynchronousRead()
