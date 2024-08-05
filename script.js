//Linear search


function linearSearch(arr, val) {
    console.log('LINEAR SEARCH')
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log(arr,val,i)
            return i;
        }      
    }
    
    console.log(arr,val,-1)
    
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
linearSearch([34,51,1,2,3,45,56,687], 56)