
function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) => { 
       const filteredArray = mixedArray.filter(arr => typeof arr == 'string')
                                       .map (arr => arr.toLowerCase());
        if(filteredArray.length > 0){
            resolve(filteredArray);
        }else{
            reject("No Strings")
        }
    })
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result)
        })
    .catch(e => {
        console.error(e)
})




