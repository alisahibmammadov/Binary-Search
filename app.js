
function binarySearch(array,targetElement){
    //* The index of the first element of the array
    let left = 0
    //* The index of the last element of the array
    let right = array.length - 1
    
    while(left <= right){
        const indexOfTheMiddleElement = Math.floor((left + right)/2)
        if(array[indexOfTheMiddleElement] === targetElement){
            return indexOfTheMiddleElement
        }
        if(array[indexOfTheMiddleElement] < targetElement){
            left = indexOfTheMiddleElement + 1
        }else{
            right = indexOfTheMiddleElement -1
        }
    }
    //! If the given element is not in the array, the while loop returns us nothing. Therefore, we return -1
    return -1 
}


const sortedArray = [2,4,6,8,9,11,13,15,17,20,22,27]
const targetElement = 17 //8
const targetElementIndex = binarySearch(sortedArray,targetElement)

if(targetElement !== -1){
    console.log("The index of the given number is found!",targetElementIndex);
}else{
    console.log("The given number is not in the array...");
}