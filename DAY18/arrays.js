//Accessing Elements

const arr =[10,20,30,40,50];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);  
}

for(let i=arr.length-1;i>=0;i--)
{
    console.log(arr[i]);
    console.log(arr.at(-i));
} 
console.log(arr.at(-1));


//Modifying

const arr1 =[10,20,30,40,50];

arr1[0]="Gousi";
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);  
}

//Array.isArray()

const arr2 =[10,20,30,40,50];
console.log(Array.isArray(arr2));


