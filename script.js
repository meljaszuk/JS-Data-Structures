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

//Binary search
function binarySearch(arr,val) {
    console.log('BINARY SEARCH')
    console.log(arr,val)

    let minIndex = 0;
    let maxIndex = arr.length - 1;


    function modifyArray(minIndex,maxIndex) {

        if (minIndex > maxIndex) {
            console.log('Value not found');
            return -1; // Value not found
        }

        let divideIndex = Math.floor((minIndex + maxIndex) / 2 )

        if (val > arr[divideIndex]) {
            return modifyArray(divideIndex + 1,maxIndex)
        } else if (val < arr[divideIndex]) {
            return modifyArray(minIndex, divideIndex - 1)
        } else {
            console.log('found on:', divideIndex);
            return divideIndex;
        }
    }

   return modifyArray(0, arr.length - 1);
}

binarySearch([1,3,5,8,11,23,56,687,1234,3234,5657,34561], 56)
binarySearch([1,3,5,8,11,23,56,687,1234,3234,5657,34561], 0)

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

//Binary search tree

//matryca węzła
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//matryca drzewa
class BST {
    constructor() {
        this.root = null;
    }

//dodawanie węzła
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            console.log(this)
            return this;
        }

        let current = this.root;

        while(true) {
            if(value === current.value) return undefined;
            if(value<current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this
                } 
                current = current.left;
            } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this
                    }
                current = current.right;
                }
            }
        }
    }

    let tree = new BST();
    tree.insert(6)
    tree.insert(34)
    tree.insert(11)
    tree.insert(2)
    tree.insert(3)
    tree.insert(2)
    tree.insert(8)
    tree.insert(81)

    console.log(tree)
    

