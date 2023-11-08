
// !Create Set
// We can create a set as below.
let mySet =  new Set(); 

// Set Methods

// !add() -It is used to add values in the set.
// !has() -It is used to check whether the value is present in the set or not.
// !delete() -It is used to delete the value from the set.
// !clear() -It is used to clear the set.
// !size -It is used to get the size of the set.
// !values() -It is used to get the values of the set.
// !keys() -It is used to get the keys of the set.
// !entries() -It is used to get the entries of the set.


let studentEntries = new Set();  
   
//Add Values  
studentEntries.add("John");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");



//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
   
//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries)