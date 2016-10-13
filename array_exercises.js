

function myUniq(array) {
  let arr = [];
  function callback(el) {
    if (!arr.includes(el)) {
      arr.push(el)
    };
  };
  array.forEach(callback)
  console.log(arr)
};

// myUniq([1,2,3,2,1])

function two_sum(array) {
  let zero_sums = [];

  function callback(el, index, array){
    counter = index + 1
    while (counter <= array.length){
      let nextNum = array[counter]
      if (array[counter] + array[index] == 0) {
        zero_sums.push([index, counter])
      };
      counter += 1
    };

  }

  array.forEach(callback)

  console.log(zero_sums)

};

function twoSum(array) {
  let zero_sum = []
  for (i = 0; i < array.length; i++) {
    for (j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        zero_sum.push([i,j])
      };
    };
  };
  console.log(zero_sum)
};

// twoSum([0,1,4,-1,8,-7,-0])


function myTranspose(array_of_arrays) {
  debugger
  let trans_array = [];
  for (i=0; i < array_of_arrays.length; i++) {
    let current_array = [];
    for (j=0; j < array_of_arrays[i].length; j++) {
      current_array.push(array_of_arrays[j][i])
    }
    trans_array.push(current_array)
  }
  console.log(trans_array)
}

// myTranspose([[0, 1, 2],[3, 4, 5],[6, 7, 8]])
