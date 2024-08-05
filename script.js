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

/* //Binary search
function binarySearch(arr,val) {
    console.log('BINARY SEARCH')
    console.log(arr,val)

    let searchedIndex;
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    let divideIndex = Math.floor(arr.length / 2)

    while (searchedIndex === undefined) {
        if (arr[divideIndex] > val) {
            maxIndex = divideIndex
            divideIndex = Math.floor(maxIndex / 2);
        } else

        if (arr[divideIndex] < val) {
            minIndex = divideIndex;
            divideIndex = Math
        }
    }

}
 */
binarySearch([1,3,5,8,11,23,56,687,1234,3234,5657,34561], 56)

//Bubble sort
function bubbleSort(arr) {
    console.log('BUBBLE SORT')
    console.log(arr)
    let temp;
    let swap = false; 

    for (let i = arr.length; i > 0; i--) {
        for (let n = 0; n < arr.length; n++) {
            if (arr[n] > arr[n+1]) {
                temp = arr[n];
                arr[n] = arr[n+1];
                arr[n+1] = temp;
                swap = true;
            }
        }
    if (!swap) break;
    }

    console.log(arr)

    return arr;
}

bubbleSort([34,51,1,2,3,45,56,687])

