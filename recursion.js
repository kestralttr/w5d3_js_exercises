function recRange(start,end){
  if(end < start){
    return []
  }else if(end === start){
    return [end]
  };
  let array = [];
  array = recRange(start,end - 1).concat([end])
  return array
};

// console.log(recRange(1,6))
// console.log(recRange(8,6))
// console.log(recRange(1,10))

function iterRange(start,end){
  if(end < start){
    return []
  };
  let result = [];
  for (i = start; i <= end; i++){
    result.push(i)
  };
  return result
};

// console.log(iterRange(1,6))
// console.log(iterRange(8,6))
// console.log(iterRange(1,100))


function exponent1(base, power){
  if (power === 0) {
    return 1
  }else if(power ===1) {
      return base
  };
  return base*exponent1(base, power - 1)
};

// console.log(exponent1(10,20))

function exponent2(base, power){
  if (power === 0) {
    return 1
  }else if(power === 1) {
      return base
  }else if(power % 2 === 0) {
      return exponent2(base, (power / 2)) * exponent2(base, (power / 2))
  }else if(power % 2 != 0) {
      return base * exponent2(base, ((power - 1)/2)) * exponent2(base, ((power - 1)/2))
  }
};

// console.log(exponent2(10, 3))


function fibNums(num){
  if (num === 0) {
    return []
  }else if(num === 1) {
      return [0]
  }else if(num === 2) {
      return [0,1]
  }
    let fibs = [];
    fibs = fibNums(num - 1)
    fibs= fibs.concat([fibs[fibs.length - 1] + fibs[fibs.length - 2]])
    return fibs
}

// console.log(fibNums(10))

function binarySearch(arr,target) {

  let middle = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[middle] != target) {
    return NaN
  } else if (arr[middle] === target) {
    return middle
  };

  let left = arr.slice(0,middle);
  let right = arr.slice(middle, arr.length)

  if (arr[middle] < target){
    middle += binarySearch(right, target)
  }else{
    middle= binarySearch(left, target)
  };
  return middle
};
// console.log(binarySearch([0,1,2,3,4,5], 0))
// console.log(binarySearch([0,1,2,3,4,5], 1))
// console.log(binarySearch([0,1,2,3,4,5], 2))
// console.log(binarySearch([0,1,2,3,4,5], 3))
// console.log(binarySearch([0,1,2,3,4,5], 4))
// console.log(binarySearch([0,1,2,3,4,5], 5))
// console.log(binarySearch([0,1,2,3,4,5], 6))

function makeChange(change, coins = [25, 10, 5, 1]){
  if ((change < coins[0]) && (coins.length <= 1)){
    return NaN
  } else if (change === coins[0]){
    return coins[0]
  }
  let remaining_change = change;
  let best_change = [];
  let current_best =[];
  debugger
  while(coins.length > 1){
    if (remaining_change - coins[0] > 0){
      current_best = [coins[0]]
      remaining_change -= coins[0]
      current_best = current_best.concat(makeChange(remaining_change, coins.slice(1, coins.length)))
    } else{
      current_best = current_best.concat(makeChange(remaining_change, coins.slice(1, coins.length)))
    };

    if (best_change.length === 0) || (current_best.length < best_change.length) && current_best != NaN{
      best_change = current_best
    }
  }
  if (remaining_change === 0) {
    return best_change
  }
  best_change = best_change.concat(makeChange(remaining_change, coins.slice(1, coins.length)))
  return best_change
}

console.log(makeChange(14, [10,7,1]))
