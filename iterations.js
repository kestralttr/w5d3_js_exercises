// (14)  [7,2]

function factors(num) {
  let result = [];
  for(i=2;i<num;i++) {
    if (num % i === 0) {
      result.push(i)
    };
  };
  return result
};

// console.log(factors(1000000))

function bubble_sort(array){
  let boolean = false;
  let sorts = array;
  while (!boolean){
    boolean = true

    for(i = 0; i < sorts.length - 1; i++){
      if(sorts[i] > sorts[i+1]){
        boolean = false
        let temp = sorts[i];
        sorts[i] = sorts[i+ 1];
        sorts[i + 1] = temp;
      };
    };
  };
  return sorts
};
