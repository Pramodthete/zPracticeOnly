const math=require('./page1')    // this is custom module(means given by us) use ./

console.log(math)

console.log(math.madd(10,20))       //last add function get call from page1.js
console.log(math.msubtract(40,33))
console.log(math.mmultiply(10,10))

console.log(math.mpi)   // or
console.log(`pi= ${math.mpi}`)       // this backkot/bakTik(`__`) means interpolation