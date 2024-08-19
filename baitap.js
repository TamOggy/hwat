const Array = [10,9,8,5,7,6,4,4,2,2,5,6,7,4,2,3,1]

// console.log("Number", Array) // In ra mảng Array có tên string là Number

for(i=0;i<Array.length;i++){
    // console.log(Array[i])// In từng phần tử trong mảng Array
} 

let max = Array[0];
for(let i=0; i < Array.length; i++)
    if (Array[i] > max) {
        max = Array[i];
    }
// console.log(max)// In phần tử lớn nhất

let sum=0
for(i=0; i<Array.length; i++){
    sum += Array[i]
} 
// console.log(sum)// cộng từng phần tử trong mảng

let evenNumber = Array[0]

for(i=0; i<Array.length; i++){
    if(Array[i] % 2 === 0)
    {
        evenNumber = Array[i]
    }
}
// console.log(evenNumber)//phần tử chẵn

let reversedArray = [];

for (let i=Array.length-1; i>=0; i--) {
  reversedArray.push(Array[i]);
}
// console.log(reversedArray)//đảo ngược mảng

for (i = 0; i < Array.length; i++) {
  for (j = 0; j < Array.length; j++) {
    if (Array[j] > Array[j + 1]) {
        // console.log(Array[i])
        // console.log(Array[j])
      let aaa = Array[j];
      Array[j] = Array[j + 1];
      Array[j + 1] = aaa;
    }
  }
}

// console.log(Array);//Sắp xếp thứ tự
 
function findIndex(Array, value) {
  for (let i = 0; i < Array.length; i++) {
      if (Array[i] === value) {
          return i;
      }
  }
  return -1;
}
let toFind = 200
let index = findIndex(Array, toFind);
// console.log(index)//Truyền vào giá trị toFind tìm số lặp lại mấy lần

const removeDuplicates = (Array) => {
  let newArray = [];
  for (let i = 0; i < Array.length; i++) {
    if (!newArray.includes(Array[i])) {
      newArray.push(Array[i]);
    }
  }
  return newArray;
}
// console.log(removeDuplicates(Array)) //Xóa phần tử trung lặp

const Array1 = [100,22,33,44]

const mergeArrays = (Array, Array1) => {
  return [...Array, ...Array1];
}
// console.log(mergeArrays(Array1,Array))// nối 2 mảng

const search = (Array, value) => {
  let count = 0;
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === value) {
      count++;
    }
  }
  return count;
}

// console.log(search(Array,2))//số lần lặp lại 