//------------------------------------------------------------MAP------------------------------------------------//

/* Do operation in a array in more formatable form.
Ex - Multiply every element in array to 2. */
const arr = [1,2,3,4,5]; 

function transform(i) {
    return i*2; 
}

const ans = arr.map(transform); 
console.log(ans); 


///----------------------------------------------------------Filter-------------------------------------------------//

/* Filter data in a array/.. in a given form. 
 Ex. select even element in a array. */ 
 
const arr2 = [1,2,3,4,5,6]; 

function transformByFilter(i) {
    if(i % 2 == 0) return true; 
}

const ans2 = arr2.filter(transformByFilter); 
console.log(ans2);
 