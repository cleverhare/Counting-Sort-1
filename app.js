// Just copy and paste the below code. Happy Coding 
function countingSort(arr) {
    let counts = Array(100).fill(0);
  arr.forEach(item => {++counts[item];});
  return counts;

}
