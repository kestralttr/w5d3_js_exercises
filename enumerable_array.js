

function addOne(num){
  return num + 1
};

// function myEach(array, funk){
//   let changed = [];
//   array.forEach(callback)
//   function callback(element){
//     changed.push(funk(element))
//   };
//
//
//   console.log(array)
//   return changed
// };

function myEach(array,funk) {
  for(i = 0; i < array.length; i++) {
    funk(array[i])
  };
  return array
};

 // console.log(myEach([1,2,3], addOne))

function myMap(array,superFunk){
  let mappedArray = [];

  myEach(array,element => mappedArray.push(superFunk(element)));

  console.log(mappedArray)
};

 // myMap([1,2,3], addOne)

// function add(acc, el){
//   acc += el
//   acc
// };


function myInject(array, megaFunk){
  let injection = array[0];

  myEach(array.slice(1), element => injection = megaFunk(injection,element))
  console.log(injection)

};

myInject([1,2,3],megaFunk)

function megaFunk(injection, element) {
  injection += element
  return injection
};
