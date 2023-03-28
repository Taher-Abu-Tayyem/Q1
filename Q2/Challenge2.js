
function majorityElement(nums) {
    const n = nums.length;
    const map = new Map();
    
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
      if (map.get(num) > n / 2) {
        return num;
      }
    }
  }
  const nums = [4,4,5];
  const majority = majorityElement(nums);
  console.log(majority); 
  