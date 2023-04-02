const returnFirstTwoDrivers=(x)=>{
    return x.slice(0, 2)
}
const returnLastTwoDrivers=(x)=>{
    return x.slice(-2)
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
return (fare)=>int*fare
}

const fareDoubler=function createFareMultiplier(v){
    return v*2
}
const fareTripler=function createFareMultiplier(v){
    return v*3
}

function selectDifferentDrivers(arr,cb){
    return cb(arr)
}

